import React, { Component } from 'react';

class Recipe extends Component {

  render() {
    return(
      <div>
        <div className='column-heading' id="recipe-header">
          <h2>Recipe</h2>
        </div>
        <ul>
          {this.props.itemsAmounts.map((item, i) =>
          <li className="recipe-ingredient" key={i}>{item}</li>)}
        </ul>
        <p className="instructions">{this.props.recipe.instructions}</p>
      </div>
    )
  }
}

export default Recipe;
