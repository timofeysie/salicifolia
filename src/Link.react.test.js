import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';

test('Link test changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Faceboook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});