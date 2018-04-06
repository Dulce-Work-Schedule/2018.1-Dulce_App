import React from 'react';
import NewManager from '../src/Screens/NewManager';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<NewManager />).toJSON();
  expect(tree).toMatchSnapshot();
});
