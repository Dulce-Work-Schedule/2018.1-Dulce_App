import React from 'react';
import renderer from 'react-test-renderer';
import Schedule from '../../src/Routes/Schedule';

require('bezier');

test('renders correctly' , () => {
  const tree = renderer
  .create(<Schedule />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
