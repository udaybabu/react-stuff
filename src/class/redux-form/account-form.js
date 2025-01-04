import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AccountForm = () => {
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [amount, setAmount] = useState(null);

    const dispatch = useDispatch();


    return(<>
    <div>
        <div>
            AccountHolderName:<input type="text" value={name} onChange={(e) => setName(e.target.value)} /><button onClick={() =>{dispatch({type:"NAME",payload:name})}}>AddName</button><br/>
            AccountHolderPhoneNumber:<input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /><button onClick={() => {dispatch({type:"PHONE", payload:phone})}}>AddPhoneNumber</button><br/>
            Amount:<input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
            <button onClick={() => {dispatch({type:"DEP", payload:amount})}}>Deposit</button>
            <button onClick={() => {dispatch({type:"WIT", payload:amount})}}>Withdraw</button>
        </div>
    </div>
    </>)

}
export default AccountForm;