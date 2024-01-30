import React from "react";

function Wrapper({ component }) {
  return (
    <div style={{ border: "2px solid red", backgroundColor: "gray" }}>
      {component}
    </div>
  );
}

export function Child() {
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}

export default Wrapper;
