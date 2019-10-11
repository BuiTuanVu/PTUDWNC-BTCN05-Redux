import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickSquare, jumpTo, sort, restart } from '../actions/index';
import Game from '../components/Game';

class GameContainer extends Component {
    render() {
        return (
            <Game history={this.props.history}
                xIsNext={this.props.xIsNext}
                stepNumber={this.props.stepNumber}
                isReverse={this.props.isReverse}
                clickSquare={this.props.clickSquare}
                jumpTo={this.props.jumpTo}
                sort={this.props.sort}
                restart={this.props.restart}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber,
    isReverse: state.isReverse,
})

const mapDispatchToProps = (dispatch) => ({
    clickSquare: (id) => dispatch(clickSquare(id)),
    jumpTo: (id) => dispatch(jumpTo(id)),
    sort: () => dispatch(sort()),
    restart: () => dispatch(restart())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)

