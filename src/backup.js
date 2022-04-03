import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import { animals } from "./components/animals";

class App extends Component {
  // Initialize state object that has a property called animals
  state = { animals: animals };

  handleOnClick = (name) => {
    const updatedAnimals = animals.map((animal) => {
      if (name == animal.name) {
        animal.likes += 1;
      } else return animal;
    });
    return this.setState(updatedAnimals);
  };

  render() {
    const animalList = animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          // pass handleOnClick method as a prop called onClick, handleOnClick is a callback function, use arrow function to pass a callback to an event handler
          // Passing params to event handler or callback using fat arrow function
          onClick={() => this.handleOnClick(animal.name)}
        />
      );
    });

    return (
      <>
        <h1>Animal Project</h1>
        <div className="cards">{animalList}</div>
      </>
    );
  }
}

export default App;