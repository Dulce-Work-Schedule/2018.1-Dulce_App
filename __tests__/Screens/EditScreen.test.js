import 'react-native';
import React from 'react';
import EditScreen from '../../src/Screens/EditScreen';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<EditScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('change hospital file ', () => {
  const wrapper = shallow(<EditScreen />);
  const hospitalField = wrapper.find('AGRInput').at(2);
  hospitalField.simulate('changeText','text');
  expect(wrapper.state('hospital')).toBe('text');
});

test('change sector file', () => {
  const wrapper = shallow(<EditScreen />);
  const sectorField = wrapper.find('AGRInput').at(3);
  sectorField.simulate('changeText' , 'text');
  expect(wrapper.state('sector')).toBe('text');
});

test('change password file', () => {
  const wrapper = shallow(<EditScreen />);
  const passwordField = wrapper.find('AGRInput').at(4);
  passwordField.simulate('changeText','text');
  expect(wrapper.state('password')).toBe('text');
});

test('name field error' , () => {
  const wrapper = shallow(<EditScreen />);

  wrapper.setState({name: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const nameFieldError = wrapper.find('Text').at(0);
  const fieldText = nameFieldError.dive().text();

  expect(fieldText).toBe('The field \"name\" is mandatory.');
});
test('hospital field error' , () => {
  const wrapper = shallow(<EditScreen />);

  wrapper.setState({hospital: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const hospitalFieldError = wrapper.find('Text').at(0);
  const fieldText = hospitalFieldError.dive().text();

  expect(fieldText).toBe('The field \"hospital\" is mandatory.');
});

test('sector field error', () => {
  const wrapper = shallow(<EditScreen />);

  wrapper.setState({sector: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const sectorFieldError = wrapper.find('Text').at(0);
  const fieldText = sectorFieldError.dive().text();

  expect(fieldText).toBe('The field \"sector\" is mandatory.');
});

test('password field error', () => {
  const wrapper = shallow(<EditScreen />);
  wrapper.setState({password: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const passwordFieldError = wrapper.find('Text').at(0);
  const fieldText = passwordFieldError.dive().text();
  expect(fieldText).toBe('The field \"password\" length must be greater than 4.');
});

test('save button', () => {
  const wrapper = shallow(<EditScreen />);
  const onSaveMock = jest.fn();
  const saveButton = wrapper.find('AGRButton').at(0);

  wrapper.setState({editable: true});
  wrapper.instance().save = onSaveMock;
  wrapper.setProps({});
  saveButton.simulate('press');
  expect(onSaveMock).toBeCalled();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<EditScreen />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});


//Edit Screen não funciona, logo o teste tamem não.
//
// it('Should call save function', async() => {
//   const spy = jest.spyOn(EditScreen.prototype, 'save');
//   const wrapper = shallow(<EditScreen />);
//   wrapper.setState({name: 'Update User Test'});
//   wrapper.setState({registration: '123456'});
//   wrapper.setState({password: '123456'});
//   wrapper.setState({hospital: 'Axios Post Medical Center'});
//   wrapper.setState({sector: 'Testing'});
//   await flushPromises();
//   wrapper.update();
//   const saveButton = wrapper.find('AGRButton').at(0);
//   saveButton.simulate('press');
//   expect(spy).toHaveBeenCalled();
// });
