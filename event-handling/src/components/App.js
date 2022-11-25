import { useState } from "react";
import "../App.css";

function App() {
  // Controlled Input state
  const [name, setName] = useState("");

  const [headingText, setHeading] = useState("");

  // handling mouseOver Event
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  // prevenDefault event will not allow default behaviour of Forms
  function handleSubmit(event) {
    setHeading(name);
    event.preventDefault();
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
        <h1>Welcome {headingText}</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="What's your name?"
            value={name}
          />
          <button
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            // Conditionaly rendering style of button
            style={{ backgroundColor: isMouseOver ? "Black" : "teal" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default App;
