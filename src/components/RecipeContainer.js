import React, { Component } from 'react';
import Cocktail from './Cocktail'
import Recipe from './Recipe'

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    // get measurements
    // get ingredients
    // show measurements with ingredients
    // show this.props.data.instructions
    console.log('show instructions');
    return <Recipe />
  }

  render() {
    return(
      <div>
        <h1>
          Recipe Container
        </h1>
        <h3>
          Cocktails
        </h3>
        <ul>
          {this.props.recipes.map((recipe, i) =>
          <Cocktail handleClick={this._handleClick} data={recipe} key={i}/>)}
        </ul>
        <h3>
          Recipes
        </h3>
        <Recipe />
      </div>
    )
  }
}

export default RecipeContainer;
