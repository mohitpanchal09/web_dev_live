import React, { useState } from "react";

function Maverick() {
  const [title, setTitle] = useState("do bho bho");
  const handleTodo = () => {
    setTitle(Math.floor(Math.random() * 10 + 1));
  };
  return (
    <div>
      <MavKeTodo title={title} />
      <button onClick={handleTodo}>click</button>
      <MavKeTodo title="eat" />
      <MavKeTodo title="sleep" />
      <MavKeTodo title="sit" />
    </div>
  );
}

function MavKeTodo(props) {
  return (
    <>
      {/* <h1>Todo List</h1> */}
      <p>{props.title}</p>
    </>
  );
}

export default Maverick;
