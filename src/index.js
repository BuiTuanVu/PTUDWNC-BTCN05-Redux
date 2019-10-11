import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { gameReducer } from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GameContainer from './containers/GameContainer';


import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(gameReducer, devToolsEnhancer());



ReactDOM.render(<Provider store={store}>
    <GameContainer />
</Provider>,
    document.getElementById('root'));



