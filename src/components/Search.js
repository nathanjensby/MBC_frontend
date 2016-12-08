import React, { Component } from 'react';

class Search extends Component {

  }
  render() {
    return(
      <input type="text" placeholder='Search' ref="search" onChange={this.searchItems()}/>
    )
  }
}

export default Search;
