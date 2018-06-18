import React from 'react';
import renderer from 'react-test-renderer';
import AbsencesScreen from '../../src/Screens/AbsencesScreen';
require('bezier');

it('renders correctly', () => {
  const tree = renderer
    .create(<AbsencesScreen />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
