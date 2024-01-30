import React from "react";

function Homie() {
  let a = true;
  let b = 2;
  let c = null;
  let rm = Math.floor(Math.random() * 10 + 5);
  console.log(rm);
  return (
    <div>
      {/* <h1>{a}</h1> cannot view boolean value directly */}
      <h1>{JSON.stringify(a)}</h1>
      <h2>{b}</h2>
      <p>{rm}</p>
      <p>{JSON.stringify(c)}</p>
    </div>
  );
}

export default Homie;
