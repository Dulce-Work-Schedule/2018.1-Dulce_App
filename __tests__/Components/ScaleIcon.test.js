import React from 'react';
import ScaleIcon from '../../src/Components/ScaleIcon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<ScaleIcon />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing onPress', () => {
  const onPressMock = jest.fn();
  const wrapper = shallow(<ScaleIcon onPress={onPressMock} />);
  wrapper.simulate('press');
  expect(onPressMock).toBeCalled();
});
