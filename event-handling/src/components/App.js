import { useState } from "react";
import "../App.css";

function App() {
  const [heading, setHeading] = useState("Hello");

  // handling mouseOver Event
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <>
      <header>
        <h1>Event handling</h1>
      </header>
      <div className="container">
        <h1>{heading}</h1>
        <input type="text" placeholder="What's your name?" />
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          // Conditionaly rendering style of button
          style={{ backgroundColor: isMouseOver ? "Black" : "red" }}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
