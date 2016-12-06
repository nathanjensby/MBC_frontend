import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';

class Ingredient extends Component {
  constructor(props) {
    super(props);
  }

 _onChange(e) {
  console.log('checkbox checked:', (e.target.checked));
  console.log('id:', this.props.id);

}
  render() {
    console.log(this.props.props.id);
    return (
      <div>
        <label>
          <Checkbox onChange={this._onChange} props={this.props.props}/>
          {this.props.props.name} {this.props.props.id}
        </label>
      </div>
    )
  }
}
export default Ingredient;
