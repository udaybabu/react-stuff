import React, { useMemo, useState } from "react";

let UseMemoHook = () => {
    let [searchText, setSearchText] = useState();
    let [filterArray, setFilterArray] = useState([]);
    let mobiles = [{ id: 1, name: "iphone X", price: 30000 }, { id: 2, name: "samsung", price: 2000 },
    { id: 3, name: "iphone sc", price: 15000 }, { id: 4, name: "One plus nord", price: 40000 }, { id: 5, name: "Nothing phone", price: 50000 }
    ]
    let testData = useMemo(() => {
        return mobiles.filter(mobile => {
            return mobile.name.includes(searchText);
        })
    }, [searchText,mobiles])
    return (<>
        <div>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Enter text" />
            <div>
                <label>Mobile Types</label>
                <table style={{ ["border"]: "2px solid black" }}>
                    <tr>
                        <th>S.NO</th>
                        <th>Mobile</th>
                        <th>Price</th>
                    </tr>
                    {testData && testData.length > 0 && testData.map(mobile => {
                        return (<tr key={mobile.id}>
                            <th>{mobile.id}</th>
                            <th>{mobile.name}</th>
                            <th>{mobile.price}</th>
                        </tr>)
                    })
                    }
                </table>
            </div>

        </div>
    </>)

}
export default UseMemoHook;