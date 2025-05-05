import React, { useCallback, useState } from "react"
const UseCallBack = () => {
const [count, setCount] = useState(0);

const increment = useCallback(() => {
     setCount(pre => pre +1)
},[])
  return(<>
  <h3>Increment:{count}</h3>
  <button onClick={increment}>Increment</button>
  </>)
}
export default UseCallBack;