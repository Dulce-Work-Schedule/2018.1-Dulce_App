import 'react-native';
import React from 'react';
import EditScreen from '../../src/Screens/EditScreen';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import t from 'tcomb-form-native';
import {Alert} from 'react-native';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const navigation = jest.fn();
  const tree = renderer
    .create(<EditScreen navigation = {navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test onChange value',() => {
  const navigation = jest.fn();
  const wrapper = shallow(<EditScreen navigation = {navigation}/>);
  const onChange = wrapper.instance().onChange();
  console.log(onChange);
});

it('testing onChange container',() => {
  const navigation = jest.fn();
  const type = t.struct({
    nome: t.String,
    sobrenome: t.String,
    email: t.String
  });
  const wrapper = shallow(<EditScreen navigation = {navigation} type={type}/>);
  const container = wrapper.find('Styled(Container)').at(0);
  const form = container.find('Form').at(0);
  form.props().onChange();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('should call edit function', async () => {
  const spy = jest.spyOn(EditScreen.prototype, 'edit');
  const wrapper = shallow(<EditScreen />);
  const button = wrapper.find('IconButton').at(0);
  console.log(button);
  button.simulate('press');
  await flushPromises();
  wrapper.update();
  expect(spy).toHaveBeenCalled();
});

it('should navigate to profile', async () => {
  jest.mock('Alert',() => {
    return {
      alert: jest.fn()
    };
  });
  const navigation = {navigate: jest.fn()};
  const wrapper = shallow(<EditScreen navigation={navigation}/>);
  const button = wrapper.find('IconButton').at(0);
  console.log(button);
  button.simulate('press');
  await flushPromises();
  wrapper.update();
  console.log(Alert.alert.mock.calls[0][2][0]);
  Alert.alert.mock.calls[0][2][0].onPress();
  expect(navigation.navigate).toHaveBeenCalled();
});

//
// it('_alert onPress Não', () => {
//
//   jest.mock('Alert',() => {
//     return {
//       alert: jest.fn()
//     };
//   });
//
//   const wrapper = shallow(<Schedule />);
//
//   wrapper.instance()._alert(jest.fn());
//   Alert.alert.mock.calls[0][2][0];
// });
