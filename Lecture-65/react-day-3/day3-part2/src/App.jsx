import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Person from "./components/Person";
import "./App.css";
import Events from "./components/Events";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Person />
      <Events />
      <Student name="sam" age="28" />
      <Student name="mohit" age="22" />
    </>
  );
}

export default App;
