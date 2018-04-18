import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import SmallButton from '../../src/Components/SmallButton';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<SmallButton />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing onPress' , () =>  {
  const onPressMock = jest.fn();
  const wrapper = shallow(<SmallButton onPress={onPressMock}/>);
  wrapper.simulate('press');
  expect(onPressMock).toBeCalled();
});
