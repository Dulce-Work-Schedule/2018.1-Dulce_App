import React from 'react';
import renderer from 'react-test-renderer';
import Doctors from '../../src/Routes/Doctors';

test('renders correctly' , () => {
  const tree = renderer
  .create(<Doctors />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
