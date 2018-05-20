import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './Game.js';
import Board from './Board.js';
import Square from './Square.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
