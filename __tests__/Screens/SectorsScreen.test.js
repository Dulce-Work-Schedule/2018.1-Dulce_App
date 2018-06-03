import 'react-native';
import React from 'react';
import SectorsScreen from '../../src/Screens/SectorsScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<SectorsScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
