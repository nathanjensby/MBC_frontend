import React, { Component } from 'react';
import './App.css';
import IngredientContainer from './components/IngredientContainer';
import RecipeContainer from './components/RecipeContainer';
import update from 'immutability-helper';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes:[],
      selectedItems: {}
    }
    this._addItemToSelected = this._addItemToSelected.bind(this)
    this._removeItemFromSelected = this._removeItemFromSelected.bind(this)
    this._loadRecipes = this._loadRecipes.bind(this)
  }

  _addItemToSelected(item) {
    let oldSelected = this.state.selectedItems
    const newSelected = update(oldSelected, {$merge:{[item]:true}});
    this.setState({
      selectedItems: newSelected
    }, function() {
      this._loadRecipes()
    })

  }

  _removeItemFromSelected(item) {
    const key = item
    delete this.state.selectedItems[key]
    this._loadRecipes()
  }

  _loadRecipes() {
    let itemsArray = Object.keys(this.state.selectedItems)
    const url = "https://vast-castle-37901.herokuapp.com/items/"+itemsArray+"/recipes"

    axios.get(url).then((data) => {
      let recipes = data.data
      this.setState({
        recipes
      })
      console.log(this.state.recipes);
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBarCart</h2>
        </div>
        <div>
          <IngredientContainer selectItem={this._addItemToSelected} removeItem={this._removeItemFromSelected}/>
          <RecipeContainer recipes={this.state.recipes}/>
        </div>
      </div>
    );
  }
}

export default App;
