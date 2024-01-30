import React, { useState } from "react";

function Tida() {
  return (
    <div>
      <Head task="todowsef" />
      <Head task="wsef" />
      <Head task="todowewsef" />
      <BadaHead task="do jump" />
    </div>
  );
}

function Head(props) {
  return <h1>title:{props.task}</h1>;
}

function BadaHead({ task }) {
  const [t, setT] = useState(task);
  const handleClick = () => {
    setT(Math.floor(Math.random() * 10));
  };
  return (
    <>
      <Head task={task} />
      <button onClick={handleClick}>click</button>
    </>
  );
}
export default Tida;
