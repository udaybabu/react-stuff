import React, { useRef, useState } from "react";

const FormHandling = () => {
    const [userName, setUserName] = useState("");
    const password = useRef();

    const handleLogin = () => {
        window.alert(`Name:${userName} \n Password:${password.current.value}`)
    }
    return (<>
        <label>Two ways to handle forms</label>
        <div>
            <label>ControllWay</label>
            <input type="text" placeholder="enter name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
            <label>UnControlledWay</label>
            <input type="password" placeholder="enter password" ref={password} />
        </div>
        <div>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    </>)
}
export default FormHandling;