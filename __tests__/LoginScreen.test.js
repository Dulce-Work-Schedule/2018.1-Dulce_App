import React from 'react';
import {LoginScreen} from '../src/Screens/LoginScreen';
import renderer from 'react-test-renderer';

require('bezier');
test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
