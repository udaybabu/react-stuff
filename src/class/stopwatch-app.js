import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCount((pre) => pre + 1);
      }, 1000);
    }

    return(() => {
       clearInterval(timer);
    })
  }, [isActive]);

  const startAction = () => {
    setIsActive(true);
  };

  const pauseAction = () => {
    setIsActive(false);
  };

  const resetAction = () => {
    setIsActive(false);
    setCount(0);
  };

  return (
    <>
      <div>
        <label>Count:{count}</label>
      </div>
      <div>
        <button onClick={startAction}>Start</button>
        <button onClick={pauseAction}>Pause</button>
        <button onClick={resetAction}>Reset</button>
      </div>
    </>
  );
};
export default Stopwatch;
