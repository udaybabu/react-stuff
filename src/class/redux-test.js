import React from "react";
import { useDispatch } from "react-redux";
import AccountForm from "./redux-form/account-form";
import AccountData from "./redux-form/account-data";

const ReduxTest = () => {

    return (<>
        <div>
           <AccountForm />
           <AccountData />
        </div>
    </>)

}
export default ReduxTest;