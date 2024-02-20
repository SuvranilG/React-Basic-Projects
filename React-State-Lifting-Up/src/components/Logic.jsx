import React, { useState } from "react";


export default function App() {
  const [enteredText, setEnteredText] = useState(""); // State to store user input
  const [showMessage, setShowMessage] = useState(false);
  const textChangeHandler = (event) => {
     // Update state with input value
    setEnteredText(event.target.value);


  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent form submission
    // You can perform any additional logic here if needed
    setShowMessage(!showMessage);
  };

  return (
    <div className="App">
      <h1>Get user input</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Type something"
          type="text"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
      {enteredText && showMessage && <h2 className=" text-green-400">You just typed: {enteredText}</h2>}
    </div>
  );
}
