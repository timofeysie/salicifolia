import React from 'react';
import Game from './Game';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
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
  console.log(tree.children);

});