import React, { useEffect, useState } from "react";

const CounterDemo = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    let timer = setInterval(() => {
        setCount(pre => pre+1)
    },1000)

    return(() => {
        clearInterval(timer)
    })
   })
   return(<>
   <h3>Count:{count}</h3>
   </>)
}
export default CounterDemo;