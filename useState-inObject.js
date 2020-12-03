import React, { useState } from "react";

const myObject = { name: "John", age: 23, message: "Hi John" };
const UseStateObject = () => {
  const [person, setPerson] = useState(myObject);

  function changeMessage() {
    setPerson({ ...person, message: "Hola John" });
  }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Say hi
      </button>
    </>
  );
};

export default UseStateObject;
