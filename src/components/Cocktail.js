import React, { Component } from 'react'

class Cocktail extends Component {
constructor(props){
  super(props);
  this._handleButtonClick = this._handleButtonClick.bind(this)
}

_handleButtonClick() {
  console.log(this.props.data.id);
  let recipeId = this.props.data.id
  this.props.grabRecipeId(recipeId)
}

  render() {
    return(
      <div>
        <h4>
          <button className="cocktail-button" onClick={this._handleButtonClick}>{this.props.data.name}</button>
        </h4>
      </div>
    )
  }
}

export default Cocktail;
