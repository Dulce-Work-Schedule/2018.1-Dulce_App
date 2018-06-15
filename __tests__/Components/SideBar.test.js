import React from 'react';
import 'react-native';
import SideBar from '../../src/Components/SideBar';
import renderer from 'react-test-renderer';

require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<SideBar />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
