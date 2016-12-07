import React, { Component } from 'react'

class Cocktail extends Component {
  render() {
    return(
      <div>
        <h4>
          <button onClick={this.props.handleClick}>{this.props.data.name}</button>
          <p>{}</p>
        </h4>
      </div>
    )
  }
}

export default Cocktail;
