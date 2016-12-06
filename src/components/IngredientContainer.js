import React, { Component } from 'react';
import Ingredient from './Ingredient';
import _ from 'lodash';
import axios from 'axios';


class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems:[]
    }
  }

    // make ajax call to get all ingredients
    _getIngredients(){
    axios.get('https://vast-castle-37901.herokuapp.com/items/').then((data) => {
      let itemsList = data.data
      this._renderItems(itemsList)
      }
    )
  }
    //render ingredients
    _renderItems(arr) {
      arr.forEach(function(listItem) {
        console.log(listItem.name)
      })
      console.log(arr);
  }

  render() {
    return(
      <div>
        <h2>This is the Ingredient Container</h2>

        <Ingredient />

      </div>
    )
  }
}

export default IngredientContainer;
