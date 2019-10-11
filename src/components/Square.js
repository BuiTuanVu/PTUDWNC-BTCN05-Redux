import React, { Component } from 'react';


// function Square(props) {
//     return(
//       <button className="square" data-pro={props.value} onClick={props.onClick}>{props.value}</button>
//     );
//   }

class Square extends Component {
  render() {
    const squareClass = `square ${this.props.winner}`
    return (
      <button className={squareClass} data-pro={this.props.value} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default Square;