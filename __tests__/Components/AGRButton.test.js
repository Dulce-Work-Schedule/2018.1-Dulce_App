import React from 'react';
import AGRButton from '../../src/Components/AGRButton';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<AGRButton />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing onPress', () => {
  const onPressMock = jest.fn();
  const wrapper = shallow(<AGRButton onPress = {onPressMock}/>);
  const button = wrapper.find('Styled(Button)').at(0);
  button.simulate('press');
  expect(onPressMock).toBeCalled();
});
