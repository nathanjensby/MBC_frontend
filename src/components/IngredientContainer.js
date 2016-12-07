import React, { Component } from 'react';
import Ingredient from './Ingredient';
import _ from 'lodash';
import axios from 'axios';
import update from 'immutability-helper';


class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      selectedItems: {}
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
      // console.log("ingredient selected: ", this.props.id );
      let oldSelected = this.state.selectedItems
      const newSelected = update(oldSelected, {$merge:{[item]:true}});
      this.setState({
        selectedItems: newSelected
      })
      console.log(this.state.selectedItems);
    }

    _removeIngredient(item) {
      const key = item
      delete this.state.selectedItems[key]
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
