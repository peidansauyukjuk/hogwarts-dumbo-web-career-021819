import React, { Component } from 'react';
import '../App.css';

import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from '../containers/HogContainer';
import SearchContainer from '../containers/SearchContainer';


class App extends Component {

  state = {
    allHogs: [],
    greased: false
  }


  filterHogByGreased = (bool) => {
    this.setState({
      greased: bool
    })
  }

  componentDidMount() {
    this.setState({
      allHogs: hogs
    })
  }
  
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < SearchContainer filterByHogGreased={this.filterHogByGreased} />
          < HogContainer hogs={this.state.allHogs} />
      </div>
    )
  }
}

export default App;
