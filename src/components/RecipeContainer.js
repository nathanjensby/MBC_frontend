import React, { Component } from 'react';
import Cocktail from './Cocktail'

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this._grabRecipeId = this._grabRecipeId.bind(this)

  }

  _grabRecipeId(id) {
  this.props.handleRecipeClick(id)
  }


  render() {
    return(
      <div>
        <h2>
          Recipe Container
        </h2>
        <h3>
          Cocktails
        </h3>
        <ul>
          {this.props.recipes.map((recipe, i) =>
          <Cocktail grabRecipeId={this._grabRecipeId} data={recipe} key={i}/>)}
        </ul>
      </div>
    )
  }
}

export default RecipeContainer;
