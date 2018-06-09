import React from 'react';
import renderer from 'react-test-renderer';
import ListProfile from '../../src/Screens/ListProfile';
require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<ListProfile />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
