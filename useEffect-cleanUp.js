import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", returnSize);
    console.log("useEffect");

    return cleanUpFunction;
  });

  function cleanUpFunction() {
    window.removeEventListener("resize", returnSize);
    console.log("Clean");
  }

  function returnSize() {
    setSize(window.innerWidth);
  }
  return (
    <React.Fragment>
      <h2>Size of the window</h2>
      <h2>{size}</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
