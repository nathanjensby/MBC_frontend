import React, { Component } from 'react';

class Recipe extends Component {

  render() {
    return(
      <div>
        <h2>
          Recipe
        </h2>
        <ul>
          {this.props.itemsAmounts.map((item, i) =>
          <li key={i}>{item}</li>)}
        </ul>
        <p>{this.props.recipe.instructions}</p>
      </div>
    )
  }
}

export default Recipe;
