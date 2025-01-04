import React from "react";
import AuthCheck from "./utilty/auth-check";
import Login from "./utilty/login";
import Profile from "./utilty/profile";



const HigherOrderComponents = () => {
    
    const LoginComponent = AuthCheck(Login);
    const ProfileComponent = AuthCheck(Profile)
    return (<>
           <LoginComponent data={"Hi Preaveen!"}/>
           <ProfileComponent data={"Bye praveen!"} />
    </>)
}

export default HigherOrderComponents;