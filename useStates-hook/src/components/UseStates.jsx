import { useState } from "react";

function UseStates() {
  // Syntax of Use State hook
  // [variableToStoreInitialValue, methodToSetInitialValue] = useState(initialValue);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button type="submit" onClick={decrement}>
        -
      </button>
      <button type="submit" onClick={increment}>
        +
      </button>
    </>
  );
}

export default UseStates;
