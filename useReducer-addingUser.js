import React, { useState, useReducer } from "react";
import Modal from "./Modal";

function reducer(state, action) {
  if (action.type === "ADD_USER") {
    const newUser = [...state.people, action.payload];

    return {
      ...state,
      people: newUser,
      showModal: true,
      modalMessage: "New user added",
    };
  } else if (action.type === "EMPTY_VALUE") {
    return {
      ...state,
      showModal: true,
      modalMessage: "Please enter a value",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  } else if (action.type === "REMOVE_PERSON") {
    const leftUsers = state.people.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      people: leftUsers,
      showModal: true,
      modalMessage: "User removed",
    };
  }
}

const Index = () => {
  const [name, setName] = useState("");
  const defaultState = {
    people: [],
    showModal: false,
    modalMessage: "im modal!!!!",
  };
  const [currentState, task] = useReducer(reducer, defaultState);

  function handleSubmit(event) {
    event.preventDefault();

    if (name) {
      const newUser = { id: new Date().getTime().toString(), name };

      task({ type: "ADD_USER", payload: newUser });

      setName("");
    } else {
      task({ type: "EMPTY_VALUE" });
    }

    setTimeout(() => task({ type: "CLOSE_MODAL" }), 3000);
  }

  function inputGetValue(event) {
    setName(event.target.value);
  }

  return (
    <>
      {currentState.showModal && (
        <Modal modalContent={currentState.modalMessage} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={inputGetValue} />
        </div>
        <button type="submit">Add person</button>
      </form>
      {currentState.people.map((object) => {
        return (
          <div key={object.id} className="item">
            <h4>{object.name}</h4>
            <button
              onClick={() =>
                task({ type: "REMOVE_PERSON", payload: object.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
