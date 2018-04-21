import React from 'react';
import renderer from 'react-test-renderer';
import NewManager from '../../src/Routes/NewManager';

test('renders correctly' , () => {
  const tree = renderer
  .create(<NewManager />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
