import React from "react";
import Loader from "../Loader";
import Table from "../Table";

const TableBody = ({userData, sortTable, invertSort, openUser, userInfo, isLoader, showUserInfo, handleFilter }) => {
    return (
        isLoader ? <Loader /> :
                <>
                    <Table
                        userData={userData}
                        sortTable={sortTable}
                        invertSort={invertSort}
                        openUser={openUser}
                        fullUserInfo={userInfo}
                        showUserInfo={showUserInfo}
                        handleFilter={handleFilter}
                    />
                </>

    )
}

export default TableBody;