import React from "react";

function Bhai() {
  let arr = ["a", "b", "c"];
  let arr2 = [{ a: "2" }, { a: "c", b: "22" }];
  return (
    <div>
      <h1>{JSON.stringify(arr2)}</h1>
      {arr2.map((item) => {
        return Object.values(item).map((element) => {
          return <p>{element}</p>;
        });
      })}
    </div>
  );
}

export default Bhai;
