import React, { useState } from "react";

const AuthCheck = (WrappedComponent) => {
    return ((props) => (<>
           <div>This is higher order component</div>
           <WrappedComponent {...props}/>
        </>))

}
export default AuthCheck;