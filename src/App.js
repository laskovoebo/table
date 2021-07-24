import './App.css';
import React, {useState, useEffect} from "react";
import GetDataServer from "./GetDataServer";
import AmountData from "./AmountData";
import TableBody from "./TableBody";
import PageButton from "./PageButton";

function App() {
    const [handleButton, setHandleButton] = useState(false)
    const [invertSort, setInvertSort] = useState(true);
    const [userInfo, setUserInfo] = useState('');
    const [url, setUrl] = useState('');
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [quantityRow, setQuantityRow] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const [prewDisabled, setPrewDisabled] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const [foundTextFilter, setFoundTextFilter] = useState('');
    const [{userData, isLoader, setUserData, isLoaded}] = GetDataServer({url, handleButton});
    const limitPage = 50;

    const getFilteredData = () => {
        if (!foundTextFilter){
            return userData;
        }

        return userData.filter(
            (item) => {
               return item['firstName'].toLowerCase().includes(foundTextFilter.toLowerCase())
            }
        )
    }

    console.log(foundTextFilter)

    const filteredUserData = getFilteredData();
    const firstPage = selectedPage * limitPage;
    const lastPage = firstPage - limitPage + 1;
    const pagesArrayData = filteredUserData.slice(lastPage, firstPage);

    const selectPage = (page) => {
        setSelectedPage(page);
        setCurrentPage('active')
    }

    useEffect(() => {
        if(!isLoaded) {
            return
        }
        setQuantityRow(filteredUserData.length)
        const getQuantityPage = Math.ceil(quantityRow/limitPage);
        setQuantityPage(getQuantityPage)
    }, [isLoaded, quantityPage, quantityRow, filteredUserData.length])

    let pages = []
    for(let i = 1; i <= quantityPage; i++) {
        pages.push(i)
    }

    const handleData = (url) => {
        setUrl(url);
        setHandleButton(true)
    }

    const sortTable = (user) => {
        const copyData = userData.concat();
        let sortData;
        if (invertSort) {
            sortData = copyData.sort(
                (a, b) => {return a[user] > b[user] ? 1 : -1});
        } else {
            sortData = copyData.reverse(
                (a, b) => {return a[user] > b[user] ? 1 : -1});
        }
        setUserData(sortData);
        setInvertSort(!invertSort);
    }

    const openUser = (user) => {
        setShowUserInfo(true);
        setUserInfo(user);
    }

    const nextPage = () => {
        if(selectedPage > quantityPage - 1) {
            setPrewDisabled('disabled')
            return
        }
        setSelectedPage(selectedPage + 1);
    }

    const backFirstPage = () => {
        if(selectedPage < 2) {
            setPrewDisabled('disabled')
            return
        }
        setSelectedPage(selectedPage - 1)
    }

    const handleFilter = (inp) => {
        setFoundTextFilter(inp)
        console.log(inp)
    }

    return (
        <div className="App">
            {!handleButton ? <AmountData handleData={handleData}/> :
                <TableBody
                    userInfo={userInfo}
                    invertSort={invertSort}
                    sortTable={sortTable}
                    userData={pagesArrayData}
                    openUser={openUser}
                    isLoader={isLoader}
                    showUserInfo={showUserInfo}
                    handleFilter={handleFilter}
                />}
            {isLoaded&& <PageButton
                pages={pages}
                selectPage={selectPage}
                nextPage={nextPage}
                backFirstPage={backFirstPage}
                prewDisabled={prewDisabled}
                currentPage={currentPage}
                selectedPage={selectedPage}
            />}
        </div>

    );
}

export default App;
