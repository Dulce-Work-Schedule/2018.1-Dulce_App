import React from 'react';
import 'react-native';
import VacationScreen from '../../src/Screens/VacationScreen';
import renderer from 'react-test-renderer';

require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<VacationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
