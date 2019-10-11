import { CLICK_SQUARE, RESTART, SORT, JUMPTO } from '../constants/index';

const initialState = {
    history: [{
        squares: Array(400).fill(null),
        location: ''
    }],
    xIsNext: true,
    stepNumber: 0,
    isReverse: false,
}

const changeSquares = (initialState, i) => {
    const history = initialState.history.slice(0, initialState.stepNumber + 1);
    const current = history[history.length - 1]; //Get the last element of history
    const squares = current.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //     return;
    // }

    const size = Math.sqrt(history[0].squares.length);
    const location = [Math.floor(i / size) + 1, (i % size) + 1].join(",")
    squares[i] = initialState.xIsNext ? 'X' : 'O';
    return ({
        history: history.concat([{
            squares: squares,
            location: location
        }]),
        xIsNext: !initialState.xIsNext,
        stepNumber: history.length,
    });
}



const restart = (state) => {
    const history = state.history.slice()[0];

    const squares = history.squares.slice();
    return {
        history: [{ squares: squares }],
        stepNumber: 0,
        xIsNext: true,
        isReverse: false,
    }

}




const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SQUARE:
            return ({ ...changeSquares(state, action.id) })

        case RESTART:
            return {
                ...restart(state)
            }
        default:
            return state
    }
}

export default gameReducer;