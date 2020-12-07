import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName && email) {
      const newUser = { firstName, email };
      setPeople((users) => {
        return [...users, newUser];
      });

      setFirstName("");
      setEmail("");
    } else {
      alert("Please write your name and email");
    }
  }

  function saveName(event) {
    setFirstName(event.target.value);
  }

  function saveEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="from-control">
            <label htmlFor="firstName">name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={saveName}
            />
          </div>
          <div className="from-control">
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={saveEmail}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((object) => {
          const { firstName, email } = object;
          return (
            <div className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
