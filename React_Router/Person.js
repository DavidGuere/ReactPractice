import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { my_unique_identifier } = useParams();
  const [name, setName] = useState("name");

  useEffect(() => {
    const newName = data.find(
      (element_of_object) =>
        element_of_object.id === parseInt(my_unique_identifier)
    );
    setName(newName.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
