import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  function clickHandler() {
    setText("I changed the title with the button");
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
