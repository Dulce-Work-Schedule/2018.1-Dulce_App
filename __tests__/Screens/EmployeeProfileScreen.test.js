import React from 'react';
import 'react-native';
import EmployeeProfileScreen from '../../src/Screens/EmployeeProfileScreen';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
require('bezier');
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<EmployeeProfileScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
