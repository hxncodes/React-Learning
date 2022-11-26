import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ComponentTree() {
  //1. When new text is written into the input, its state should be saved.
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //2. When the add button is pressed, the current data in the input should be
  // Empty array using state to hold todo items
  const [items, setItems] = useState([]);
  function addTodoItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* 3. rendering todo item from items array using map function */}
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
