import React, { createContext, useContext } from "react";

export let context = createContext();
function UseContextHook() {

    return (<>
        <context.Provider value={{name:"prakash"}}>
            <Home />
        </context.Provider>
    </>)

}
export default UseContextHook;

function Home() {
    return (<>
        <Profile />
    </>)
}

function Profile() {
    return (<>
        <Info />
    </>)
}

function Info() {
    let data = useContext(context);
    return (<>
        <div>This is props drilling example:{data.name}</div>      
    </>)
}