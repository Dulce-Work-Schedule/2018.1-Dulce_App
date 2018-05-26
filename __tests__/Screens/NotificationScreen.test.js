import React from 'react';
import 'react-native';
import NotificationScreen from '../../src/Screens/NotificationScreen';
import renderer from 'react-test-renderer';

require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<NotificationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
