import React, { useEffect, useState } from "react";
import useGetApiData from "./utilty/api-response";


let CustomHooks = () => {
    let res = useGetApiData();
    return (<>
        <div>
            <label>Hello</label>
            {res && res.length && res.map(i => (<div>
                {i.title}
            </div>))

            }
        </div>
    </>)
}
export default CustomHooks;