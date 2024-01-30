import React from "react";

function Events() {
  const handleClick = () => {
    console.log("clicked");
  };
  function handleDelete(id) {
    console.log("deleted", id);
  }
  return (
    <div>
      <button onClick={handleClick}> click me</button>
      <button onClick={() => handleDelete(id)}></button>
    </div>
  );
}

export default Events;
