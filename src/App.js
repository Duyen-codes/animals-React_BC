import React, { Component } from "react";
import styles from "./App.module.css";
import animals from "./components/animals";
import AnimalCard from "./components/AnimalCard";

class App extends Component {
  // Initialize state object that has a property called animals
  state = { animals: animals, search: "" };

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

  searchHandler(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });

    return (
      <>
        <h1>{this.state.animals.length} Animals</h1>
        <input
          type="text"
          // onChange={this.searchHandler}
          onChange={this.searchHandler.bind(this)}
          value={this.state.search}
        />
        <ul className={styles.cards}>
          {animalFilter.map((animal) => {
            return (
              <AnimalCard
                key={animal.name}
                name={animal.name}
                likes={animal.likes}
                dislikes={this.state.dislike}
                remove={this.handleRemove.bind(this, animal.name)}
                click={() => this.handleAddLike(animal.name)}
                searchTerm={this.state.search}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
