import React, { useMemo, useState } from "react";

function MyUseMemoHook() {
  const [count, setCount] = useState(0);
  let [inp, setInp] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("counter");
  };
  const handleChange = (e) => {
    setInp(e.target.value);
    console.log(inp);
  };
  let loop = useMemo(() => {
    let ans = 0;
    for (let i = 1; i <= inp; i++) {
      ans += i;
      console.log("loop");
    }
    return ans;
  }, [inp]);
  return (
    <div>
      <input type="number" onChange={handleChange} value={inp} />
      <h1>sum till number is {loop}</h1>
      <button onClick={handleClick}>counter : {count}</button>
    </div>
  );
}

export default MyUseMemoHook;
