import Bhai from "./Components/Bhai";
import Hello from "./Components/Hello";
import Homie from "./Components/Homie";
import Person from "./Components/Person";
import { Sam } from "./Components/Sam";

function App() {
  let a = 100;
  // ----part1 =>statemens>if else for while
  // -----

  // part2 = expression>expression map, terniray

  return (
    <>
      <h1>hello from app bhai</h1>
      <h1> a is {a}</h1>
      <Hello />
      <Person />
      <Sam />
      <Homie />
      <Bhai />
    </>
  );
}

export default App;
