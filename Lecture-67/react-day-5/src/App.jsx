import ActualWrapper, { ChildWrapper } from "./components/ActualWrapper";
import Add from "./components/Add";
import Todo from "./components/Todo";
import Wrapper, { Child } from "./components/Wrapper";

function App() {
  return (
    <>
      {/* <Todo /> */}
      {/* <Add /> */}
      {/* <Wrapper component={<Child />} /> */}
      <ActualWrapper>
        <ChildWrapper>
          <h1>hello from child wrapper</h1>
        </ChildWrapper>
      </ActualWrapper>
    </>
  );
}

export default App;
