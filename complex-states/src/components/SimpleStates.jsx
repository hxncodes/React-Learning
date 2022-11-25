import { useState } from "react";

export default function SimpleStates() {
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    setFname(event.target.value);
  }

  function updateLName(event) {
    setLName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input name="fName" onChange={updateFName} placeholder="First Name" />
        <input name="lName" onChange={updateLName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}
