import React from 'react';
import CriarGestor from '../src/Screens/CriarGestor';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CriarGestor />).toJSON();
  expect(tree).toMatchSnapshot();
});
