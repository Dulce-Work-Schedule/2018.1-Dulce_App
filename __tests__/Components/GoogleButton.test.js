import React from 'react';
import GoogleButton from '../../src/Components/GoogleButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<GoogleButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
