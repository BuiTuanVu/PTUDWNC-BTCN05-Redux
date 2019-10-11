import React, {Component}  from 'react';
import Square from './Square';
class Board extends React.Component {
    renderSquare(i) {
      const winner = this.props.winner;
      return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} winner={winner && winner.includes(i) ? 'winner' : ''}/>
    }
  
    renderBoard() {
      const sizeOfBoard = Math.sqrt(this.props.squares.length);
      const board = Array(sizeOfBoard).fill(null);
      for (let i = 0; i < sizeOfBoard; i++) {
        const squares = Array(sizeOfBoard).fill(null);
        for (let j = 0; j < sizeOfBoard; j++) {
          var squareKey = i * sizeOfBoard + j;
          squares.push(<span key={squareKey}>{this.renderSquare(squareKey)}</span>);
        }
        board.push(<div key={i}>{squares}</div>);
      }
      return board;
    }
  
    render() {
      return (
        <div>
  
          <div>{this.renderBoard()}</div>
        </div>
      );
    }
  }

export default Board;