import React, { useState } from "react";

import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {

  //   setCount(count + 1)

  // }

  return (
    <>
      <div>
        <h1>Counter App</h1> <h1 className={count % 2 === 0 ? "green" : "red"}>{count}</h1>
      </div>
      <div className="btn">
        {/* <button onClick={increment}>Increment</button> */}

        <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <button onClick={() => setCount(count * 2)}>Double</button>
      </div>

    </>
  );
};
export default Counter;
