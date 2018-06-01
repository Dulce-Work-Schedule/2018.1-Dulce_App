import React from 'react';
import NewManager from '../../src/Screens/NewManager';
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

test('change sector file ', () => {
  const wrapper = shallow(<NewManager />);
  const sectorField = wrapper.find('AGRInput').at(3);
  sectorField.simulate('changeText','text');
  expect(wrapper.state('sector')).toBe('text');
});

test('change confirme password file',() => {
  const wrapper = shallow(<NewManager/>);
  const confirmePasswordField = wrapper.find('AGRInput').at(4);
  confirmePasswordField.simulate('changeText','');
  expect(wrapper.state('confirmepassword')).toBe('');
});


test('name field error' , () => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({name: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const nameFieldError = wrapper.find('Text').at(0);
  const fieldText = nameFieldError.dive().text();

  expect(fieldText).toBe('The field \"name\" is mandatory.');
});

test('registration field error' , () => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({regitration: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const registrationFieldError = wrapper.find('Text').at(1);
  const fieldText = registrationFieldError.dive().text();

  expect(fieldText).toBe('The field \"registration\" is mandatory.');
});

test('change hospital file',() => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({hospital: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const hospitalFieldError = wrapper.find('Text').at(2);
  const fieldText = hospitalFieldError.dive().text();

  expect(fieldText).toBe('The field \"hospital\" is mandatory.');
});

test('change sector file',() => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({sector: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const sectorFieldError = wrapper.find('Text').at(3);
  const fieldText = sectorFieldError.dive().text();

  expect(fieldText).toBe('The field \"sector\" is mandatory.');
});

test('change password file length',() => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({password: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const passwordFieldError = wrapper.find('Text').at(4);
  const fieldText = passwordFieldError.dive().text();

  expect(fieldText).toBe('The field \"password\" length must be greater than 4.');
});

test('change password file',() => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({confirmepassword: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const confirmepasswordFieldError = wrapper.find('Text').at(5);
  const fieldText = confirmepasswordFieldError.dive().text();

  expect(fieldText).toBe('The field \"password\" is mandatory.');
});

test('confirm password error' , () => {
  const wrapper = shallow(<NewManager />);

  wrapper.setState({confirmepassword: ''});
  wrapper.instance()._onPressButton();
  wrapper.setProps({});

  const confirmepasswordFieldError = wrapper.find('Text').at(6);
  const fieldText = confirmepasswordFieldError.dive().text();

  expect(fieldText).toBe('The field \"confirmepassword\" is mandatory.');
});
