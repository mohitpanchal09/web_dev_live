import React, { useState } from "react";

function Add() {
  let arr = [
    { title: "eat", desc: "will eat chicken" },
    { title: "sleep", desc: "will sleep on bed" },
    { title: "run", desc: "will run on road" },
  ];
  const [array, setArray] = useState(arr);
  return (
    <div>
      <h1>Add Task</h1>
      <AddTodo array={array} setArray={setArray} />
      <Todo todos={array} />
    </div>
  );
}

function AddTodo({ array, setArray }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleClick = () => {
    setArray([...array, { title: title, desc: desc }]);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleTitle}
        type="text"
        placeholder="title"
        value={title}
      />
      <br />
      <br />
      <input
        onChange={handleDesc}
        type="text"
        placeholder="desc"
        value={desc}
      />
      <br />
      <br />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
}

function Todo({ todos }) {
  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h1>Title : {item.title}</h1>
            <p>Desc :{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Add;
