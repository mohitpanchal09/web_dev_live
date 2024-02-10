import React, { memo, useCallback, useState } from "react";

function Call() {
  let [count, setCount] = useState(0);
  //   let a = 1; //refferentially same
  //   function a() {
  //     //we should prevent this recreation
  //     //not same referentially
  //     console.log("not same referentially");
  //   }

  let a = useCallback(() => {
    console.log("referentially same");
  }, []);

  return (
    <div>
      {/* {because a is same it wont render demo again and again} */}
      <Demo a={a} />
      <button onClick={() => setCount(count + 1)}>click: {count}</button>
    </div>
  );
}

let Demo = memo(function ({ a }) {
  return (
    <div>
      <h1>a = {a()}</h1>
    </div>
  );
});
// function Demo({ a }) {
//   return (
//     <div>
//       <h1>a = {a}</h1>
//     </div>
//   );
// }

export default Call;
