import React, { Component } from 'react';
import Cocktail from './Cocktail'

class CocktailContainer extends Component {
  render() {
    return(
      <div>
        <h1>
          Cocktail Container
        </h1>
        <Cocktail />
      </div>
    )
  }
}

export default CocktailContainer;
