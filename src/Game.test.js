import React from 'react';
import Game from './Game';
import Board from './Board.js';
import Square from './Square.js';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('tree to Match Snapshot', () => {
  const component = renderer.create(
    <Game />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Game board is created', () => {
  const game = shallow(<Game />);
});