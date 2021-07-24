import React, {useState} from "react";
import sortDirectionDown from "../SortDirection/sortDirectionDown";
import sortDirectionUp from "../SortDirection/sortDirectionUp";
import AllUserInfo from "../AllUserInfo";
import FilteredForm from "../FilteredForm";

const Table = ({ userData, sortTable, invertSort, openUser, fullUserInfo, showUserInfo, handleFilter }) => {
    const SetArrow = () => {
        return (
            invertSort ? sortDirectionUp : sortDirectionDown
        )
    }

    const [itemData, setItemData] = useState('');
    const itemSortData = (item) => {
        sortTable(item);
        setItemData(item)

    }

    return (
        <>
            <FilteredForm handleFilter={handleFilter}/>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th
                        onClick={() => { itemSortData('id') }}
                        scope="col"
                    >
                        ID { itemData==='id'? <SetArrow /> : null }
                    </th>
                    <th
                        onClick={() => { itemSortData('firstName') }}
                        scope="col"
                    >
                        FirstName { itemData==='firstName'? <SetArrow /> : null }
                    </th>
                    <th
                        onClick={() => { itemSortData('lastName') }}
                        scope="col"
                    >
                        lastName { itemData==='lastName'? <SetArrow /> : null }
                    </th>
                    <th
                        onClick={() => { itemSortData('email') }}
                        scope="col"
                    >
                        E-mail { itemData==='email'? <SetArrow /> : null }
                    </th>
                    <th
                        onClick={() => { itemSortData('phone') }}
                        scope="col"
                    >
                        Phone { itemData==='phone'? <SetArrow /> : null }
                    </th>
                </tr>
                </thead>
                <tbody>
                {userData.map((item) => (
                    <tr key={ item.id + item.email} onClick={() => {openUser(item) }}>
                        <td>{ item.id }</td>
                        <td>{ item.firstName }</td>
                        <td>{ item.lastName }</td>
                        <td>{ item.email }</td>
                        <td>{ item.phone }</td>
                    </tr>
                ))}
                </tbody>
            </table>
            { showUserInfo ? <AllUserInfo fullUserInfo={fullUserInfo}/> : null }
        </>
    );
}

export default Table;