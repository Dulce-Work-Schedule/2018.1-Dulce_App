import 'react-native';
import React from 'react';
import EditScreen from '../../src/Screens/EditScreen';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

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

  wrapper.setState({editable: true});

  const saveButton = wrapper.find('AGRButton').at(0);

  wrapper.instance().save = onSaveMock;

  wrapper.setProps({});

  saveButton.simulate('press');

  expect(onSaveMock).toBeCalled();
});
