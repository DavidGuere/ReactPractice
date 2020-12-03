import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  function removeItem(arg1, arg2) {
    let keepPersons = people.filter((object) => object[arg1] !== arg2);

    setPeople(keepPersons);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem("name", name)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Delete all people
      </button>
    </>
  );
};

export default UseStateArray;
