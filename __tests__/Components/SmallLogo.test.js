import React from 'react';
import renderer from 'react-test-renderer';
import SmallLogo from '../../src/Components/SmallLogo';
require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<SmallLogo />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
