import 'react-native';
import React from 'react';
import EditScreen from '../src/Screens/EditScreen';
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

test('change name file ', () => {
  const wrapper = shallow(<EditScreen />);
  const nameField = wrapper.find('AGRInput').at(2);
  nameField.simulate('changeText','text');
  expect(wrapper.state('hospital')).toBe('text');
});

test('hospital field error' , () => {

  const wrapper = shallow(<EditScreen />);

  wrapper.setState({hospital: ""});

  wrapper.instance()._onPressButton();

  wrapper.setProps({});

  console.log(wrapper.debug());

  const nameFieldError = wrapper.find('Text').at(0);

  const fieldText = nameFieldError.dive().text();

  expect(fieldText).toBe('The field \"hospital\" is mandatory.');

});
