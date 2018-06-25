import React from 'react';
import 'react-native';
import NewUser from '../../src/Screens/NewUser';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import t from 'tcomb-form-native';
import {Alert} from 'react-native';
require('bezier');
Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const navigation = jest.fn();
  const tree = renderer
    .create(<NewUser navigation = {navigation}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test onChange value',() => {
  const navigation = jest.fn();
  const wrapper = shallow(<NewUser navigation = {navigation}/>);
  const onChange = wrapper.instance().onChange();
  console.log(onChange);
});

it('testing onChange scrollview',() => {
  const navigation = jest.fn();
  const type = t.struct({
    nome: t.String,
    email: t.String,
    senha: t.String,
    confirmarSenha: t.String
  });
  const wrapper = shallow(<NewUser navigation= {navigation} type={type}/>);
  const container = wrapper.find('ScrollView').at(0);
  const form = container.find('Form').at(0);
  form.props().onChange();
});

it('testing onPress Cadastro',() => {
  const navigation = jest.fn();
  const spy = jest.spyOn(NewUser.prototype, '_onPress');
  const wrapper = shallow(<NewUser navigation = {navigation}/>);
  const AGRButton = wrapper.find('AGRButton').at(0);
  AGRButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});

jest.mock('Alert', () => {
  return {
    alert: jest.fn()
  };
});

it('testing function _onPress',() => {
  const navigation = jest.fn();
  const type = t.struct({
    nome: t.String,
    email: t.String,
    senha: t.String,
    confirmarSenha: t.String
  });
  const value = {
    nome: 'Ezequiel',
    email: '@',
    senha: '123',
    confirmarSenha: '123'
  };
  const wrapper = shallow(<NewUser type={type} navigation = {navigation}/>);
  wrapper.setState({value: value});
  const onPressF = wrapper.instance()._onPress();
  console.log(wrapper.debug());
  console.log(onPressF);
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('Should call login function', async() => {
  const navigation = jest.fn();
  const value = {
    nome: 'Ezequiel',
    email: '123@1234444.com',
    senha: '12345',
    confirmarSenha: '12345'
  };
  const spy = jest.spyOn(NewUser.prototype, '_onPress');
  const wrapper = shallow(<NewUser navigation = {navigation} />);
  console.log(wrapper.debug);
  wrapper.setState({value: value});
  await flushPromises();
  wrapper.update();
  const enterButton = wrapper.find('AGRButton').at(0);
  enterButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('testing function _onPress error',async () => {
  const navigation = jest.fn();
  const type = t.struct({
    nome: t.String,
    email: t.String,
    senha: t.String,
    confirmarSenha: t.String
  });
  const value = {
    nome: 'Ezequiel',
    email: '@',
    senha: '123',
    confirmarSenha: '132'
  };
  const wrapper = shallow(<NewUser type={type} navigation={navigation}/>);
  wrapper.setState({value: value});
  wrapper.instance()._onPress();
  await flushPromises();
  wrapper.update();
  expect(Alert.alert).toHaveBeenCalled();
});
