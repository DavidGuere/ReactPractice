import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show ? <h2>Show is true</h2> : <h2>show is false</h2>}
      {show && <Item />}
    </>
  );
};

function Item() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", listentSize);
    return () => {
      window.removeEventListener("resize", listentSize);
    };
  }, []);

  function listentSize() {
    setSize(window.innerWidth);
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size} </h2>
    </div>
  );
}

export default ShowHide;
