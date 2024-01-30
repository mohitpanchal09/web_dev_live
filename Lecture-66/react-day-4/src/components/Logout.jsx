import React, { useState } from "react";
import Person from "./Person";

function Logout() {
  //   let username = "mohit";

  //   this logic will not change the value in dom because component rerender ni hua

  //   const handleClick = () => {
  //     console.log(username);
  //     username = "anonymous";
  //     console.log(username);
  //   };
  // ----------
  // component rerender krne k lie or change visible krne k lie we will use useState hook which returns an array of variable name and the function to change the value

  let [username, setUsername] = useState("mohit");
  const handleClick = () => {
    setUsername("Anonymous"); // whenever the state variable is changed  it rerenders the component
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <Person name={username} age="21" color="Blue" />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Logout;
