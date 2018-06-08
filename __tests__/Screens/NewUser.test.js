import React from 'react';
import 'react-native';
import NewUser from '../../src/Screens/NewUser';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<NewUser />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
