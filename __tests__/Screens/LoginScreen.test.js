import React from 'react';
import {LoginScreen} from '../../src/Screens/LoginScreen';
import adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new adapter()});

test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('change registration file ', () => {
  const wrapper = shallow(<LoginScreen />);
  const registrationField = wrapper.find('AGRInput').at(0);
  registrationField.simulate('changeText','text');
  expect(wrapper.state('registration')).toBe('text');
});

test('change password file ', () => {
  const wrapper = shallow(<LoginScreen />);
  const passwordlField = wrapper.find('AGRInput').at(0);
  passwordlField.simulate('changeText','');
  expect(wrapper.state('password')).toBe('');
});
