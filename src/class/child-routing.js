import React from "react";
import { Link, Outlet } from "react-router-dom";

export let Info = () => {
    return (<>
        <div>Info component</div>
    </>)
}

export let Profile = () => {
    return (<>
        <div>Profile component</div>
    </>)
}

let ChildRouting = () => {

    return (<>
        {/* <div>
            <Info />
            <Profile />
        </div> */}
        <button><Link to="info">Info</Link></button>
        <button><Link to="profile">Profile</Link></button>
        <Outlet />
    </>)
}
export default ChildRouting;