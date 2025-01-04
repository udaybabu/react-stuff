import React, { useEffect, useState } from "react";
const Product = ({title, brand, description, thumbnail}) => {
return(<>
<div>
    <h3>Title:{title}</h3>
    <h5>Brand:{brand}</h5>
    <p>Description:{description}</p>
    <img src={thumbnail} alt="image"/>
</div>
</>)
}

const ApiCall = () => {
    let [products, updateProducts] = useState([]);
    useEffect(() => {
        getApiData();
    }, [])

    let getApiData = async () => {
        let data = await fetch("https://dummyjson.com/products");
        let res = await data.json();
        console.log("response is:", res);
        updateProducts(res?.products);
    }

    return (<>
        <div>
            {products.length > 0 && products.map((product) => (
                <Product {...product} />
            ))
            }
        </div>
    </>)
}

export default ApiCall;