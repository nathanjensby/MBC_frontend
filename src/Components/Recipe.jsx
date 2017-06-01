import React from 'react';

const Recipe = (props) => {

    return (
        <div>
            <div className='column-heading' id="recipe-header">
                <h2>Recipe</h2>
            </div>
            <ul>
                {props.itemsAmounts.map((item, i) => {
                        <li className="recipe-ingredient" key={i}>{item}</li>
                        }
                )}
            </ul>
            <p className="instructions">{props.recipe.instructions}</p>
        </div>
    )
}

export default Recipe;
