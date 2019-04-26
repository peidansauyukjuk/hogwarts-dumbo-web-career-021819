import React, { Component} from 'react'

export default class HogTile extends Component {

  state = {
    clicked: false
  }

  slugify = () => {
    // Augustus Gloop --> augustus_gloop
    let nameArray = this.props.hog.name.toLowerCase().split(" ") // ["augustus", "gloop"]
    return nameArray.join("_")
  }
  
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <li className="pigTile" onClick={this.handleClick}>
        <h1>{this.props.hog.name}</h1>
        <h3>{this.props.hog.greased.toString()}</h3>
        <img alt={this.props.hog.name} src={require(`../hog-imgs/${this.slugify()}.jpg`)}></img>
        {this.state.clicked ? <p className="normalText">Deets</p> : null}
      </li>
    )
  }
}