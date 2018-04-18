import React from 'react';
import NewManager from '../src/Screens/NewManager';

import renderer from 'react-test-renderer';
require('bezier');
test('renders correctly', () => {
  const tree = renderer.create(<NewManager />).toJSON();
  expect(tree).toMatchSnapshot();
});
