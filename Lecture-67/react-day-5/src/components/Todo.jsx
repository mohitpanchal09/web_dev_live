import React, { useState } from "react";

// ------------way 1------------

// function Todo() {
//   let arr = [
//     { title: "eat", desc: "will eat chicken" },
//     { title: "sleep", desc: "will sleep on bed" },
//     { title: "run", desc: "will run on road" },
//   ];

//   return (
//     <React.Fragment>
//       {arr.map((item) => {
//         return <SingleTodo title={item.title} desc={item.desc} />;
//       })}
//     </React.Fragment>
//   );
// }

// function SingleTodo(props) {
//   return (
//     <React.Fragment>
//       <h1>title:{props.title}</h1>
//       <p>task: {props.desc}</p>
//     </React.Fragment>
//   );
// }
// -------------------------------

function Todo() {
  let arr = [
    { title: "eat", desc: "will eat chicken" },
    { title: "sleep", desc: "will sleep on bed" },
    { title: "run", desc: "will run on road" },
  ];
  const [todos, setTodos] = useState(arr);
  return (
    <React.Fragment>
      <SingleTodo todos={todos} />
    </React.Fragment>
  );
}

function SingleTodo({ todos }) {
  return (
    <React.Fragment>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Todo;
