import React, { Component } from 'react';
import './App.css';
import IngredientContainer from './components/IngredientContainer';
import RecipeContainer from './components/RecipeContainer';
import update from 'immutability-helper';
import axios from 'axios';
import Recipe from './components/Recipe';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes:[],
      selectedRecipe: {},
      selectedItems: {},
      itemsAmounts: []
    }
    this._addItemToSelected = this._addItemToSelected.bind(this)
    this._removeItemFromSelected = this._removeItemFromSelected.bind(this)
    this._loadRecipes = this._loadRecipes.bind(this)
    this._handleRecipeClick = this._handleRecipeClick.bind(this)
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

  componentDidMount() {
    this._loadRecipes()
  }

  _removeItemFromSelected(item) {
    const key = item
    delete this.state.selectedItems[key]
    console.log(this.state.selectedItems);
    this._loadRecipes()
  }

  _loadRecipes() {
    let itemsArray = Object.keys(this.state.selectedItems)
    console.log(itemsArray);
    const url = itemsArray.length===0 ? "https://vast-castle-37901.herokuapp.com/recipes" :  "https://vast-castle-37901.herokuapp.com/items/"+itemsArray+"/recipes"

    axios.get(url).then((data) => {
      let recipes = data.data
      this.setState({
        recipes
      })
      console.log(this.state.recipes);
      }
    )
  }

  _handleRecipeClick(id) {
    console.log("recipe clicked", id);
    const url = "https://vast-castle-37901.herokuapp.com/recipes/"+id
    axios.get(url).then((data) => {
      let selectedRecipe = data.data
      this.setState({
        selectedRecipe
      }, function() {
        console.log("recipe: ", selectedRecipe);
        this._renderItemAmounts()
      })
    })
  }

  _renderItemAmounts() {
    // console.log(this.state.selectedRecipe.measurements[1].amount);
    let arr = this.state.selectedRecipe.measurements.map((amt, i) =>
      amt.amount + " " + this.state.selectedRecipe.items[i].name)

    this.setState({
      itemsAmounts: arr
    }, function() {
      console.log(this.state.itemsAmounts)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBarCart</h2>
        </div>
        <div id="main-container">
          <IngredientContainer selectItem={this._addItemToSelected} removeItem={this._removeItemFromSelected}/>
          <RecipeContainer recipes={this.state.recipes} handleRecipeClick={this._handleRecipeClick}/>
          <Recipe  recipe={this.state.selectedRecipe} itemsAmounts={this.state.itemsAmounts}/>
        </div>
      </div>
    );
  }
}

export default App;
