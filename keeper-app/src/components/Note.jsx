import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props) {
  // getting onDelete props from App.js and also getting id of note to delete
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
