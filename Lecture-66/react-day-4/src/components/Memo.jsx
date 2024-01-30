import React, { useState } from "react";

function Memo() {
  const [t, setT] = useState("hello memo");
  const handleClick = () => {
    setT(Math.floor(Math.random() * 10));
  };
  return (
    <div>
      <Mymemo title={t} />
      <button onClick={handleClick}>click</button>
      <Mymemo title="by memo" />
      <Mymemo title="goodby memo" />
      <Mymemo title="bhagja memo" />
    </div>
  );
}

// function Mymemo(props) {
//   return (
//     <div>
//       <h1>title:{props.title}</h1>
//     </div>
//   );
// }
//memoise
const Mymemo = React.memo(function (props) {
  return (
    <>
      <h1>title:{props.title}</h1>
    </>
  );
});

export default Memo;
