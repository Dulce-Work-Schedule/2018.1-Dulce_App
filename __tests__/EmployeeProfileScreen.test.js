import React from 'react';
import 'react-native';
import EmployeeProfileScreen from '../src/Screens/EmployeeProfileScreen';
require('bezier');
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<EmployeeProfileScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
