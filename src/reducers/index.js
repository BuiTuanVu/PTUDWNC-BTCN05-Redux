import { CLICK_SQUARE, RESTART, SORT, JUMP_TO } from '../constants/index';

const initialState = {
    history: [{
        squares: Array(400).fill(null),
        location: ''
    }],
    xIsNext: true,
    stepNumber: 0,
    isReverse: false,
}

const changeSquares = (state, i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1]; //Get the last element of history
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return;
    }

    const size = Math.sqrt(history[0].squares.length);
    const location = [Math.floor(i / size) + 1, (i % size) + 1].join(",")
    squares[i] = state.xIsNext ? 'X' : 'O';
    return ({
        history: history.concat([{
            squares: squares,
            location: location
        }]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length,
    });
}

export const calculateWinner = (squares) => {
    const size = Math.sqrt(squares.length);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const index = i * size + j;


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

const jump = (id) => {
    const temp = document.querySelectorAll('.chosen-btn');
    temp.forEach(item => {
        item.classList.remove('chosen-btn');
    });

    document.getElementById(`${id}`).classList.add('chosen-btn');

    return {
        stepNumber: id,
        xIsNext: id % 2 === 0
    }
}




export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SQUARE:
            return ({ ...state, ...changeSquares(state, action.id) })

        case RESTART:
            return {
                ...restart(state)
            }

        case JUMP_TO:
            return {
                ...state,
                ...jump(action.id)
            }
        case SORT:
            return {
                ...state, isReverse: !state.isReverse
            }
        default:
            return state
    }
}

