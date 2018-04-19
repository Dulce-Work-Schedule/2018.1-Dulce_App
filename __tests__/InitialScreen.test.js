import React from 'react';
import {InitialScreen} from '../src/Screens/InitialScreen';
import renderer from 'react-test-renderer';
require('bezier');

it('renders correctly', () => {
  const tree = renderer.create(<InitialScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
