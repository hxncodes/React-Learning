import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../App.css";

function App() {
  // to store Multiple Notes
  const [notes, setNotes] = useState([]);

  // getting data from CreateArea.jsx and saving it to notes array
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {/* Displaying Notes from notes array using map function */}
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}
      <Footer />
    </div>
  );
}
export default App;
