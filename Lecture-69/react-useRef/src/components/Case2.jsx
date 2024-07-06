import React, { useState, useRef } from "react";

function Case2() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //     console.log("count", count);
  //   };

  const handleClick = () => {
    console.log(countRef.current);
    countRef.current += 1;
    console.log("ref", countRef.current);
  };
  return (
    <div>
      <h1>count1:{count}</h1>
      <h1>count2:{countRef.current}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Case2;
