import React, {useEffect, useState} from "react";

function useGetApiData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getApiData()
    }, [])

    async function getApiData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        console.log("data is:", data);
        setData(data);
    }
    return data;
}

export default useGetApiData;