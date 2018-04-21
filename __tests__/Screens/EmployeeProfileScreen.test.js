import React from 'react';
import 'react-native';
import EmployeeProfileScreen from '../../src/Screens/EmployeeProfileScreen';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('bezier');
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<EmployeeProfileScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
