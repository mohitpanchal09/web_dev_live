import React from "react";

function Student(props) {
  console.log(props);
  return (
    <div>
      <h4>name : {props.name}</h4>
      <h4>age: {props.age}</h4>
    </div>
  );
}

export default Student;
