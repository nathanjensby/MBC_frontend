import React, { Component } from 'react';
import Cocktail from '../Components/Cocktail'

class RecipeContainer extends Component {
    constructor(props) {
        super(props);
        this._grabRecipeId = this._grabRecipeId.bind(this)
    }

    _grabRecipeId(id) {
        this.props.handleRecipeClick(id)
    }


    render() {
        return (
            <div>
                <div className='column-heading'>
                    <h2>Cocktails</h2>
                </div>
                <div>
                    {this.props.recipes.map((recipe, i) =>
                        <Cocktail grabRecipeId={this._grabRecipeId} data={recipe} key={i}/>)}
                </div>
            </div>
        )
    }
}

export default RecipeContainer;
