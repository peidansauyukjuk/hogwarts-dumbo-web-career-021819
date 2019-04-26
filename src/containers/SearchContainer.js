import React, { Component } from 'react';

export default class SearchContainer extends Component {

  sortByName = () => {

  }

  render () {
    return (
      <div>
        <h3>Filter Hogs</h3>
        <label>Name</label>
        <input name="name" type="checkbox" onChange={(e) => this.props.sortByName(e.target.checked)}></input>
        <label>Weight</label>
        <input name="weight" type="checkbox" onChange={(e) => this.props.sortByWeight(e.target.checked)}></input>
        <label>Greased</label>
        <input name="greased" type="checkbox" onChange={(e) => this.props.filterByHogGreased(e.target.checked)}></input>
      </div>
    )
  }
}
