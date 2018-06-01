import 'react-native';
import React from 'react';
import ListScreen from '../../src/Screens/ListScreen';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
require('bezier');
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<ListScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('UserList snapshot test', async () => {
  const wrapper = shallow(<ListScreen />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});
