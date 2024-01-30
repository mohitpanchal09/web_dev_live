import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
}

export default Counter;
