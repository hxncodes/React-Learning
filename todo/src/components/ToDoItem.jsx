import React, { useState } from "react";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  // it will turn false into true and true into false
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
