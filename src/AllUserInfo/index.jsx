import React from "react";
import './userInfo.css';

const AllUserInfo = ({ fullUserInfo }) => {
    const streetAdress = fullUserInfo.address&&fullUserInfo.address? fullUserInfo.address.streetAddress : null;
    const cityAdress = fullUserInfo.address&&fullUserInfo.address? fullUserInfo.address.city : null;
    const stateAdress = fullUserInfo.address&&fullUserInfo.address? fullUserInfo.address.state : null;
    const zipAdress = fullUserInfo.address&&fullUserInfo.address? fullUserInfo.address.zip : null;

    return (
        <div className="userInfo">
            Выбран пользователь <b>{ fullUserInfo.firstName + ' ' + fullUserInfo.lastName }</b>
            Описание:
            <textarea defaultValue={ fullUserInfo.description } />
            Адрес проживания: <b>{ streetAdress }</b>
            Город: <b>{ cityAdress }</b>
            Провинция/штат: <b>{ stateAdress }</b>
            Индекс: <b>{ zipAdress }</b>
        </div>

    )
}

export default AllUserInfo;