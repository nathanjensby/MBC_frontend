import React, { Component } from 'react';
import Ingredient from '../Components/Ingredient.jsx';
// import Search from './Search';
import _ from 'lodash';
import axios from 'axios';


class IngredientContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            text: ''
        };

        this._selectIngredient = this._selectIngredient.bind(this)
        this._removeIngredient = this._removeIngredient.bind(this)
        this._getIngredients = this._getIngredients.bind(this)
        this._handleSearch = this._handleSearch.bind(this)
        this._loadItems = this._loadItems.bind(this)
    }

    componentDidMount() {
        this._getIngredients();
    }
    // make ajax call to get all ingredients
    _getIngredients(){
        axios.get('https://vast-castle-37901.herokuapp.com/items/').then((data) => {
            let items = data.data
            this.setState({ items })
        })
    }

    _handleSearch(e) {
        var text = e.target.value
        this.setState({ text })
    }

    _loadItems() {
        let currentText = this.state.text
        if (currentText === '') {
            return (
                this.state.items.map((item, i) => {
                    <Ingredient data={item} key={i}
                        selectItem={this._selectIngredient}
                        removeItem={this._removeIngredient} selectedItems={this.state.selectedItems} />
                    }
                )
            )
        }
        else {
            var filteredResults = this.state.items.filter(function(item) {
                return (
                    item.name.toLowerCase().startsWith(currentText)
                )})
                return (
                    filteredResults.map((item, i) => {
                        <Ingredient data={item} key={i}
                            selectItem={this._selectIngredient}
                            removeItem={this._removeIngredient} selectedItems={this.state.selectedItems} />
                    }
                )
            )
        }
    }

    _selectIngredient(item) {
        this.props.selectItem(item)
    }

    _removeIngredient(item) {
        this.props.removeItem(item)
    }

    render() {
        return (
            <div>
                <div className='column-heading'>
                    <h2>Ingredients</h2>
                </div>
                {/* <div>
                    <input id='search' type="text" placeholder='Search' ref="search" value={this.state.text} onChange={this._handleSearch}/>
                </div> */}
                <div>
                    {this._loadItems()}
                </div>
            </div>
        )
    }
}

export default IngredientContainer;
