import { useState } from "react";

export default function ChallangeComplexStates() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    // catching event in handleChange function and the destructuring its required parameters
    const { name, value } = event.target;

    // setting new value depending their input filed and preserving preveious value with arrow function of prevvalue and spread operator
    // Notice. Using Spread Operator we have to write key of key:value pair inside an array, otherwise it will not work
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    // All if else part of ChallangeComplexStates is now turned into only above code. this is beauty of Spread Operator
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
