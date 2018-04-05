import React from 'react';
import 'react-native';
import ProfileManager from '../src/Screens/ProfileManager';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ProfileManager />).toJSON();
  expect(tree).toMatchSnapshot();
});
