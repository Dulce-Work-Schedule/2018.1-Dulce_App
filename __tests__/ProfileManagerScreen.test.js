
import React from 'react';
import 'react-native';
import ProfileManagerScreen from '../src/Screens/ProfileManagerScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(ProfileManagerScreen )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
