import React from 'react';
import 'react-native';
import HospitalsScreen from '../src/Screens/HospitalsScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<HospitalsScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
  
