import React from "react";

const List = (prop) => {
  const helpObject = prop.key_of_object;

  function iterateThroughPeople(object) {
    const { id, name, age, image } = object;
    return (
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years old</p>
        </div>
      </article>
    );
  }
  return (
    <React.Fragment>{helpObject.map(iterateThroughPeople)}</React.Fragment>
  );
};

export default List;
