import React from 'react';
import {LoginScreen} from '../../src/Screens/LoginScreen';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Alert} from 'react-native';
import expect from 'expect';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

jest.mock('Alert', () => {
  return {
    alert: jest.fn()
  };
});

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
  const passwordlField = wrapper.find('AGRInput').at(1);
  passwordlField.simulate('changeText','');
  expect(wrapper.state('password')).toBe('');
});

test('test alert empty password', () => {
  const wrapper = shallow(<LoginScreen />);
  //Registration preenchido
  const registrationField = wrapper.find('AGRInput').at(0);
  registrationField.simulate('changeText','123456');
  //Password vazio
  const passwordField = wrapper.find('AGRInput').at(1);
  passwordField.simulate('changeText','');

  wrapper.findWhere(n => n.props().text === 'Entrar').simulate('Press');
  expect(Alert.alert).toHaveBeenCalled();
});

test('test alert empty regitration', () => {
  const wrapper = shallow(<LoginScreen />);
  //Registration vazio
  const registrationField = wrapper.find('AGRInput').at(0);
  registrationField.simulate('changeText','');
  //Password preenchido
  const passwordField = wrapper.find('AGRInput').at(1);
  passwordField.simulate('changeText','123456');
  wrapper.findWhere(n => n.props().text === 'Entrar').simulate('Press');
  expect(Alert.alert).toHaveBeenCalled();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('Should call login function', async() => {
  const spy = jest.spyOn(LoginScreen.prototype, 'login');
  const wrapper = shallow(<LoginScreen />);
  wrapper.setState({registration: '123456'});
  wrapper.setState({password: '123456'});
  await flushPromises();
  wrapper.update();
  const enterButton = wrapper.find('AGRButton').at(0);
  enterButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});
