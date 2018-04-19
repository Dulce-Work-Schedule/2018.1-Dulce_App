import React from 'react';
import NewManager from '../src/Screens/NewManager';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

test('renders correctly', () => {
  const tree = renderer.create(<NewManager />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('change name file ', () => {
  const wrapper = shallow(<NewManager />);
  const nameField = wrapper.find('AGRInput').at(0);
  nameField.simulate('changeText','text');
  expect(wrapper.state('name')).toBe('text');
});

test('change registration file ', () => {
  const wrapper = shallow(<NewManager />);
  const registrationField = wrapper.find('AGRInput').at(1);
  registrationField.simulate('changeText','text');
  expect(wrapper.state('registration')).toBe('text');
});

test('change hospital file ', () => {

  const wrapper = shallow(<NewManager />);
  const hospitalField = wrapper.find('AGRInput').at(2);
  hospitalField.simulate('changeText','text');
  expect(wrapper.state('hospital')).toBe('text');

});

