import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const request = await fetch(url);
    const users_from_server = await request.json();

    setUsers(users_from_server);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((object) => {
          const { id, login, avatar_url, html_url } = object;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
