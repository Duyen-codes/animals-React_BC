import React, { Component } from "react";
import styles from "./App.module.css";
import animals from "./components/animals";
import AnimalCard from "./components/AnimalCard";

class App extends Component {
  // Initialize state object that has a property called animals
  state = { animals: animals, dislike: 0 };

  handleRemove = (name) => {
    const filteredArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: filteredArray });
  };

  handleAddLike = (name) => {
    this.setState((state) => {
      const updatedAnimals = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedAnimals };
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.animals.length} Animals</h1>
        <ul className={styles.cards}>
          {this.state.animals.map((animal) => {
            return (
              <AnimalCard
                key={animal.name}
                name={animal.name}
                likes={animal.likes}
                dislikes={this.state.dislike}
                remove={this.handleRemove.bind(this, animal.name)}
                click={() => this.handleAddLike(animal.name)}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
