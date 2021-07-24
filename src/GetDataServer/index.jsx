import axios from "axios";
import {useState, useEffect} from "react";

const GetDataServer = ({url, handleButton}) => {
    const [userData, setUserData] = useState([]);
    const [isLoader, setLoader] = useState(true);
    const [isLoaded, setLoaded] = useState(false);

    const getData = () => {

    }

    useEffect(() => {
        if(!handleButton) {
            return
        }
        axios(url)
            .then((res) => {
                setUserData(res.data);
                setLoader(false);
                setLoaded(true);
            })
    }, [handleButton, url])

    return([{userData, isLoader, setUserData, setLoader, isLoaded}, getData]);
}

export default GetDataServer;