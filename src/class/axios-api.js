import React, { useEffect } from "react";
import axiosInstance from "./utilty/axiosclient";
function ApiAxios() {
    useEffect(() => {
      //  GetAxiosData()
    }, [])

    let PostAxiosData = async() => {
        let payload = {
            name:"Uday",
            Place:"Tirupath"
        }
        let res = await axiosInstance.post('/posts',payload);
        console.log("Axios response:",res);
    }

    return (<>
        <div>
            <button onClick={() => PostAxiosData()}>GetAxiosData</button>
        </div>
    </>)

}
export default ApiAxios;