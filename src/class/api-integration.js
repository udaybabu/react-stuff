import React, { useEffect } from "react";
import Config from "./config";

const ApiIntegration = () => {

    useEffect(() => {


        GetApiData();
    }, []);

    const GetApiData = async() => {
        const url = `${Config.apiBaseUrl}/comments?postId=1`
            let res = await fetch(url,{
                method:"GET"
            })
            let data = await res.json();
            console.log("Get data:", data);

    }

    const PostApiData = async() => {

        const url = `${process.env.REACT_APP_API_BASE_URL}/posts`;
        let user = {
            name:"Uday",
            Place:"Tirupath"
        }
        let res = await fetch(url,{
            method:"POST",
            body: JSON.stringify(user)
        })
        let data = await res.json();
        console.log("Post data is:",data);

    }

    const PutApiData = async() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/posts/1`;
        let user = {
            name:"Kumar",
            Place:"Piler"
        }
        let res = await fetch(url,{
            method:"PUT",
            body: JSON.stringify(user)
        })
        let data = await res.json();
        console.log("Put data is:",data);
        
    }

    const PatchApiData = async() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/posts/1`;
        let user = {
            Place:"Kalakada"
        }
        let res = await fetch(url,{
            method:"PATCH",
            body: JSON.stringify(user)
        })
        let data = await res.json();
        console.log("Patch data is:",data);
        
    }

    const DeleteApiData = async() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/posts/1`
        let res = await fetch(url,{
            method:"DELETE"
        })
        let data = await res.json();
        console.log("Delete data is:",data);
    }

    return (<>
        <div>
            <button onClick={() => GetApiData()}>GetApiData</button>
            <button onClick={() => PostApiData()}>PostApiData</button>
            <button onClick={() => PutApiData()}>PutApiData</button>
            <button onClick={() => PatchApiData()}>PatchApiData</button>
            <button onClick={() => DeleteApiData()}>DeletpiData</button>
        </div>
    </>)
}
export default ApiIntegration;