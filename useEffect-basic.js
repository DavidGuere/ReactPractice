import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  function updateNumber() {
    setValue(value + 1);
  }

  useEffect(() => {
    if (value > 1) {
      document.title = `The value is ${value}`;
    }
  });

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={updateNumber}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
