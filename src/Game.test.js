import React from 'react';
import Game from './Game';
import Board from './Board.js';
import Square from './Square.js';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('tree to Match Snapshot', () => {
  const component = renderer.create( <Game />, );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Game board is created', () => {
//   const game = shallow(<Game />);
// });

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<Game/>);
  const firstPlayer = wrapper.find('div.game-info').children().first().text();
  expect(firstPlayer).toEqual('Next player: X');
  const button = wrapper.find('button.square').first();
  button.simulate('click');
  const secondPlayer = wrapper.find('div.game-info').children().first().text();
  expect(secondPlayer).toEqual('Next player: O');

  //player 2
  const turn2 = wrapper.find('button.square').at(1);
  turn2.simulate('click');
  //player 1
  const turn3 = wrapper.find('button.square').at(4);
  turn3.simulate('click');
  //player 2
  const turn4 = wrapper.find('button.square').at(5);
  turn4.simulate('click');
  //player 1
  const turn5 = wrapper.find('button.square').at(8);
  turn5.simulate('click');
  
  const winner = wrapper.find('div.game-info').children().first().text();
  expect(winner).toEqual('Winner: X');
});