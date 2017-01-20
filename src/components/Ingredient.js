import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked:false
    }
    this._toggleCheck = this._toggleCheck.bind(this)
  }
  _toggleCheck() {
    let itemId = this.props.data.id;
    console.log("itemId", itemId);
    if (this.state.isChecked) {
      this.props.removeItem(itemId)
    } else {
      this.props.selectItem(itemId)
    }
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
    return (
      <div className="ingredient">
        <label>
          <input type="checkbox" checked={this.state.isChecked} onChange={this._toggleCheck}/> {this.props.data.name}
        </label>
      </div>
    )
  }
}
export default Ingredient;
