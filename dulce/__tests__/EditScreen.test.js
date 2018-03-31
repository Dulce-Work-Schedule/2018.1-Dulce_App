import React from 'react';
import EditScreen from '../src/Screns/EditScreen';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const tree = renderer.create(<EditScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
