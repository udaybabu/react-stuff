import React, { useEffect, useState } from "react";

const FormValidation = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        username: "",
        password: ""
    })
    const cssStyles = {
        color: "red",
        fontSize: "10px"
    }

    useEffect(() => {

    }, [])

    const handleLogin = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (userName.trim() === "") {
            setError((pre) => ({ ...error, username: "Please enter mailid" }));
        } else if (!emailRegex.test(userName)) {
            setError((pre) => ({ ...error, username: "Please enter valid email" }));
        } else {
            setError((pre) => ({ ...error, username: "" }));
        }

        if (password.trim() === "") {
            setError(() => ({ ...error, password: "Please enter password" }));
        } else if(password.length < 8){
            setError(() => ({...error, password:"Please enter password length 8 characters"}));
        } else {
            setError(() => ({...error, password:""}));
        }
    }

    return (<><div>
        <div>Form validation</div>
        <div>
            <label>UserName:</label>
            <div>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            {userName === "" && <div className={cssStyles} style={{ ["color"]: "red", ["font-size"]: "10px" }}>{error.username}</div>}
            <label>Password:</label>
            <div>
                <input type="text" value={password}  onChange={(e) => setPassword(e.target.value)} />
            </div>
            {password === "" && <div className="danger cssStyles" style={{ ["color"]: "red", ["font-size"]: "10px" }}>{error.password}</div>}
            <div>
                <button className="btn btn-primary" onClick={handleLogin}>LOGIN</button>
            </div>
        </div>
    </div></>)
}
export default FormValidation;