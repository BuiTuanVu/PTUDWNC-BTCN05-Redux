import React, { Component } from 'react';
import Board from './Board';
import './Game.css';

class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        let status;


        if (winner) {

            status = "Winner is: " + winner.winPlayer;

        } else {

            status = "Next player is: " + (this.props.xIsNext ? 'X' : 'O');
        }


        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move} (${step.location})` : 'Go to game start!';
            return (
                <li key={move} >
                    <button style={{ marginTop: 5 }} className="btn btn-sm btn-outline-dark" id={move} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        })
        return (
            <div className="game">

                <div className="game-board">
                    <Board squares={squares} onClick={(i) => this.props.clickSquare(i)} winner={winner && winner.winLocation} />
                </div>
                <div className="game-info">
                    <div className="row">
                        <div className="col-6 status">
                            {status}
                        </div>
                        <div className="col-3">
                            <button className="btn btn-sm btn-outline-success" type="button" onClick={() => this.props.restart()}>Restart</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-sm btn-outline-primary" onClick={() => this.props.sort(this.props.isReverse)}>Sort step</button>
                        </div>
                    </div>
                    <ol reversed={this.props.isReverse ? 'reverse' : ''}>{this.props.isReverse ? moves.reverse() : moves}</ol>

                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const size = Math.sqrt(squares.length);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const index = i * size + j;

            // if (((index < (i + 1) * size - 4) && (squares[index - 1] === null || squares[index + 5] === null) && squares[index] && squares[index] === squares[index + 1] && squares[index] === squares[index + 2] && squares[index] === squares[index + 3] && squares[index] === squares[index + 4])
            //     || ((squares[index - size] === null || squares[index + 5 * size] === null) && squares[index] && squares[index] === squares[index + size * 1] && squares[index] === squares[index + size * 2] && squares[index] === squares[index + size * 3] && squares[index] === squares[index + size * 4])
            //     || ((squares[index - size * 1 - 1] === null || squares[index + size * 5 + 5] === null) && squares[index] && squares[index] === squares[index + size * 1 + 1] && squares[index] === squares[index + size * 2 + 2] && squares[index] === squares[index + size * 3 + 3] && squares[index] === squares[index + size * 4 + 4])
            //     || ((squares[index - size * 1 + 1] === null || squares[index + size * 5 - 5] === null) && squares[index] && squares[index] === squares[index + size * 1 - 1] && squares[index] === squares[index + size * 2 - 2] && squares[index] === squares[index + size * 3 - 3] && squares[index] === squares[index + size * 4 - 4])) {
            //     return {
            //         winLocation: [index, index + 1, index + 2, index + 3, index + 4],
            //         winPlayer: squares[index]
            //     };
            // }

            if (((index < (i + 1) * size - 4) && (squares[index - 1] === null || squares[index + 5] === null) && squares[index] && squares[index] === squares[index + 1] && squares[index] === squares[index + 2] && squares[index] === squares[index + 3] && squares[index] === squares[index + 4])) {
                return {
                    winLocation: [index, index + 1, index + 2, index + 3, index + 4],
                    winPlayer: squares[index]
                };
            }
            else if (((squares[index - size] === null || squares[index + 5 * size] === null) && squares[index] && squares[index] === squares[index + size * 1] && squares[index] === squares[index + size * 2] && squares[index] === squares[index + size * 3] && squares[index] === squares[index + size * 4])) {
                return {
                    winLocation: [index, index + size * 1, index + size * 2, index + size * 3, index + size * 4],
                    winPlayer: squares[index]
                };
            }
            else if (((squares[index - size * 1 - 1] === null || squares[index + size * 5 + 5] === null) && squares[index] && squares[index] === squares[index + size * 1 + 1] && squares[index] === squares[index + size * 2 + 2] && squares[index] === squares[index + size * 3 + 3] && squares[index] === squares[index + size * 4 + 4])) {
                return {
                    winLocation: [index, index + size * 1 + 1, index + size * 2 + 2, index + size * 3 + 3, index + size * 4 + 4],
                    winPlayer: squares[index]
                };
            }
            else if (((squares[index - size * 1 + 1] === null || squares[index + size * 5 - 5] === null) && squares[index] && squares[index] === squares[index + size * 1 - 1] && squares[index] === squares[index + size * 2 - 2] && squares[index] === squares[index + size * 3 - 3] && squares[index] === squares[index + size * 4 - 4])) {
                return {
                    winLocation: [index, index + size * 1 - 1, index + size * 2 - 2, index + size * 3 - 3, index + size * 4 - 4],
                    winPlayer: squares[index]
                };
            }
        }

    }
    return null;
}

export default Game;