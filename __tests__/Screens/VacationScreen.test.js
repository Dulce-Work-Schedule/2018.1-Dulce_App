import React from 'react';
import renderer from 'react-test-renderer';
import VacationScreen from '../../src/Screens/VacationScreen';
require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<VacationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
