import React from "react";

function Person() {
  let a = 7;
  let el;
  let rn = Math.floor(Math.random() * 10 + 5);
  // if (rn == a) {
  //   el = <h1>number is {rn}</h1>;
  // } else {
  //   el = <h1>no number</h1>;
  // }
  return <div>{rn == a ? <h1>el</h1> : <h1>no number</h1>}</div>;

  // <div>{el}</div>;
}

export default Person;
