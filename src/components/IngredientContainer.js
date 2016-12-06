import React, { Component } from 'react';
import Ingredient from './Ingredient';
import _ from 'lodash';
import axios from 'axios';


class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      selectedItems:[]
    }
  }

  componentDidMount() {
    this._getIngredients();
  }
    // make ajax call to get all ingredients
    _getIngredients(){
    axios.get('https://vast-castle-37901.herokuapp.com/items/').then((data) => {
      let itemsList = data.data
      this.setState({
        items: itemsList
      })
      console.log(this.state.items);
      }
    )
  }
    _selectIngredient() {
      console.log(this.state.items);
    }

    _removeIngredient() {

    }

  render() {
    return(
      <div>
        <h2>Ingredients</h2>
        <form>
          {this.state.items.map((item, i) =>
          <Ingredient props={item} key={i} selectItem={this._selectIngredient}/>)}
        </form>
      </div>
    )
  }
}

export default IngredientContainer;
