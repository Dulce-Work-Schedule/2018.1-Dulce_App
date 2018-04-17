import 'react-native';
import React from 'react';
import EditScreen from '../src/Screens/EditScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<EditScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
