import React, { useState, useContext } from "react";
import { data } from "../../../data";

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  function removePerson(arg_id) {
    setPeople((people) => {
      return people.filter((object) => object.id !== arg_id);
    });
  }

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3></h3>
      <List />
    </PersonContext.Provider>
  );
};

function List() {
  const object_containing_data = useContext(PersonContext);
  const { people } = object_containing_data;
  return (
    <React.Fragment>
      {people.map((object) => {
        return <SinglePerson key={object.id} {...object} />;
      })}
    </React.Fragment>
  );
}

function SinglePerson(object) {
  const { id, name } = object;
  const object_containing_data = useContext(PersonContext);
  const { removePerson } = object_containing_data;

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
}

export default ContextAPI;
