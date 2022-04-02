import React from "react";
import AnimalCard from "./AnimalCard";

const List = (props) => {
  return (
    <ul className="cards">
      {props.animals.map((animal) => {
        return (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            likes={animal.likes}
            // Passing params to event handler or callback using fat arrow function
            onClick={() => props.onClick(animal.name)}
          />
        );
      })}
    </ul>
  );
};

export default List;
