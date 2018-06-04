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

  // manually trigger the callback
  // tree.props.handleClick(0);
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //console.log(tree.children);

});

test('Game board is created', () => {

  // Render a checkbox with label in the document
  const game = shallow(<Game />);
  console.log('game',game);
  expect(game.find(Board)).to.have.length(1);
  expect(game.find(Square)).to.have.length(6);

  
  //expect(checkbox.text()).toEqual('Off');
  //checkbox.find('input').simulate('change');
});