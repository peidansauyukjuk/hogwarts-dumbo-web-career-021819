import React, { Component } from 'react';

import HogTile from '../components/HogTile';

export default class HogContainer extends Component{
  render() {
    return (
      <div className="hogContainer">
        <ul>
          {this.props.hogs.map(hogObj => <HogTile hog={hogObj}/>)}
        </ul>
      </div>
    )
  }
}