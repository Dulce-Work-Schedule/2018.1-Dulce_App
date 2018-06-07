import React from 'react';
import ValidateButton from '../../src/Components/ValidateButton';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<ValidateButton />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing onPress', () => {
  const onPressMock = jest.fn();
  const wrapper = shallow(<ValidateButton onPress = {onPressMock}/>);
  const button = wrapper.find('Styled(Button)').at(0);
  button.simulate('press');
  expect(onPressMock).toBeCalled();
});

it('Testing onPress', () => {
  const onPressMock = jest.fn();
  const wrapper = shallow(<ValidateButton />);
  const button = wrapper.find('Styled(Button)').at(0);
  button.simulate('press');
  expect(onPressMock).toHaveBeenCalledTimes(0);
});
