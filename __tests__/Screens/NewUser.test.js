import React from 'react';
import 'react-native';
import NewUser from '../../src/Screens/NewUser';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import t from 'tcomb-form-native';

require('bezier');
Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<NewUser />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test onChange value',() => {
  const wrapper = shallow(<NewUser/>);
  const onChange = wrapper.instance().onChange();
  console.log(onChange);
});

it('testing onChange container',() => {
  const type = t.struct({
    nome: t.String,
    email: t.String,
    senha: t.String,
    confirmarSenha: t.String
  });
  const wrapper = shallow(<NewUser type={type}/>);
  const container = wrapper.find('Styled(Container)').at(0);
  const form = container.find('Form').at(0);
  form.props().onChange();
});

it('testing onPress Cadastro',() => {
  const spy = jest.spyOn(NewUser.prototype, '_onPress');
  const wrapper = shallow(<NewUser/>);
  const SignUp = wrapper.find('SignUp').at(0);
  SignUp.simulate('press');
  expect(spy).toHaveBeenCalled();
});

jest.mock('Alert', () => {
  return {
    alert: jest.fn()
  };
});

it('testing function _onPress',() => {
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
  const wrapper = shallow(<NewUser type={type}/>);
  wrapper.setState({value: value});
  const onPressF = wrapper.instance()._onPress();
  console.log(wrapper.debug());
  console.log(onPressF);
});

it('testing function _onPress error',() => {
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
  const wrapper = shallow(<NewUser type={type}/>);
  wrapper.setState({value: value});
  const onPressF = wrapper.instance()._onPress();
  console.log(wrapper.debug());
  console.log(onPressF);
});
