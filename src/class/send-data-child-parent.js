import React, { useState } from "react";

function ChildComponent({ moveData }) {
    const [value, setValue] = useState("");
    return (<>
        <div>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value);
                moveData(e.target.value)
            }} />
        </div>
    </>)
}

function DataFromChildToParent() {
    const[lblData, setLblData] = useState("");
    const getData = (data) => {
        setLblData(data);
    }

    return (<>
        <div>
            <ChildComponent moveData={getData} />
            <label>This is parent component. Get data from child:{lblData}</label>
        </div>
    </>)
}
export default DataFromChildToParent;