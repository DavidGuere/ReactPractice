import React, { useState } from "react";

const ControlledInputs = () => {
  const [user, setUser] = useState({ firstName: "", email_att: "", age: "" });
  const [people, setPeople] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (user.firstName && user.email_att && user.age) {
      const newUser = {
        firstName: user.firstName,
        email_att: user.email_att,
        age: user.age,
      };

      setPeople((object) => {
        return [...object, newUser];
      });

      setUser({ firstName: "", email_att: "", age: "" });
    }
  }

  function handleChange(event) {
    const name_of_input = event.target.name;
    const value_of_input = event.target.value;

    setUser({ ...user, [name_of_input]: value_of_input });
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
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="from-control">
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              name="email_att"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="from-control">
            <label htmlFor="age">age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((object) => {
          const { firstName, email_att, age } = object;
          return (
            <div className="item">
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email_att}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
