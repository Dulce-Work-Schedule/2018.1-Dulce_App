import React from 'react';
import 'react-native';
import VacationScreen from '../../src/Screens/VacationScreen';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<VacationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('justification file', () => {
  const wrapper = shallow(<VacationScreen />);
  const justificationField = wrapper.find('TextInput').at(0);
  justificationField.simulate('changeText','text');
  expect(wrapper.state('justification')).toBe('text');
});
