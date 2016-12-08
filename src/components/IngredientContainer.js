import React, { Component } from 'react';
import Ingredient from './Ingredient';
import _ from 'lodash';
import axios from 'axios';


class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
      }
      this._selectIngredient = this._selectIngredient.bind(this)
      this._removeIngredient = this._removeIngredient.bind(this)
      this._getIngredients = this._getIngredients.bind(this)
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
    _selectIngredient(item) {
      this.props.selectItem(item)
    }

    _removeIngredient(item) {
      this.props.removeItem(item)
    }

  render() {
    return(
      <div>
        <h2>Ingredients</h2>
        <ul>
          {this.state.items.map((item, i) =>
          <Ingredient data={item} key={i} selectItem={this._selectIngredient}
          removeItem={this._removeIngredient} selectedItems={this.state.selectedItems}/>)}
        </ul>
      </div>
    )
  }
}

export default IngredientContainer;
