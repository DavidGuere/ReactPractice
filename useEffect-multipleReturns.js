import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp_from_server) => {
        if (resp_from_server.status >= 200 && resp_from_server.status <= 299) {
          return resp_from_server.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp_from_server.statusText);
        }
      })
      .then((object_from_respond) => {
        const { login } = object_from_respond;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
