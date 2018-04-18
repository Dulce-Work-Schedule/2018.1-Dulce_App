import React from 'react';
import UserItem from '../../src/Components/UserItem';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<UserItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
