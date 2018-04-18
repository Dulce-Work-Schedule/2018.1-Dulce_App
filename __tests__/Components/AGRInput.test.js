import React from 'react';
import renderer from 'react-test-renderer';
import AGRInput from '../../src/Components/AGRInput';
require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<AGRInput />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
