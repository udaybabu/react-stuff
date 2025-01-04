import React from "react";
import { useSelector } from "react-redux";

const AccountData = () => {
    const data = useSelector((state) => {
        return state;
    })
    return (<>
        <div>
          <div>Name:{data.name}</div>
          <div>Phone:{data.mobilenumber}</div>
          <div>Amount:{data.amount}</div>
        </div>
    </>)

}
export default AccountData;