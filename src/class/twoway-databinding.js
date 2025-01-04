import React, { useState } from "react";

const TwowayDataBinding = () => {
    let[name, setName]=useState('');

    return (<>
        <div>
            UserName: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="user name" />
        </div>
    </>)
}
export default TwowayDataBinding;