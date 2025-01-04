import React, { useRef, useState } from "react";

const UseRefHook = () => {
    let [testValue, updateValue] = useState(null);
    let eleh2 = useRef();
    let refEle1 = useRef(10);
    let value = 100;
    let namesRef = useRef();
    let names = ["abhi", "bhargav", "charan", "damu", "ishanth"]

    return (<>
        <div>
            <h2 ref={eleh2}>This is use ref example</h2>
            <h4>{refEle1.current} -- {testValue} -- {value}</h4>
            <button onClick={() => {
                console.log(eleh2);
                console.log(eleh2.current);
                console.log(eleh2.current.innerHTML);
                refEle1.current += 10;
                value += 100;
                updateValue(refEle1.current);
            }}>ClickAction</button>
        </div>
        <div>
            <label>Use ref with multiple values</label>
            <div>
                {/* {names && names.length > 0 && names.map((name, index) => {
                    return (<h4 ref={(el) => (namesRef.current[index]=el)}>{name}</h4>)
                  })
                } */}
                <button onClick={() => {
                    console.log(namesRef);
                }}>ClickMultipleValues</button>
            </div>
        </div>
    </>)
}

export default UseRefHook;
