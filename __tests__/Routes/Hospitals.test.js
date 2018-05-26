import React from 'react';
import renderer from 'react-test-renderer';
import Hospitals from '../../src/Routes/Hospitals';

require('bezier');

test('renders correctly' , () => {
  const tree = renderer
  .create(<Hospitals />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
