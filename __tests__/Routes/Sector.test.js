import React from 'react';
import renderer from 'react-test-renderer';
import Sectors from '../../src/Routes/Sectors';

require('bezier');

test('renders correctly' , () => {
  const tree = renderer
  .create(<Sectors />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
