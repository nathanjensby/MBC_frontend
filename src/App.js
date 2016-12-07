import React, { Component } from 'react';
import './App.css';
import IngredientContainer from './components/IngredientContainer';
import CocktailContainer from './components/CocktailContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBarCart</h2>
        </div>
        <div>
          <IngredientContainer />
          <CocktailContainer />
        </div>
      </div>
    );
  }
}

export default App;
