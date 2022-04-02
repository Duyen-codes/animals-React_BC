import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import { animals } from "./components/animals";
import List from "./components/List";

class App extends Component {
  // Initialize state object that has a property called animals
  state = { animals: animals };

  handleOnClick = (name) => {
    const updatedAnimals = animals.map((animal) => {
      if (name === animal.name) {
        animal.likes += 1;
        return animals;
      } else {
        return animal;
      }
    });
    return this.setState(updatedAnimals);
  };

  render() {
    return (
      <>
        <h1>{animals.length} Animals</h1>
        <List animals={this.state.animals} onClick={this.handleOnClick} />
      </>
    );
  }
}

export default App;
