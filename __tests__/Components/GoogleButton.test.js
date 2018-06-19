import React from 'react';
import GoogleButton from '../../src/Components/GoogleButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<GoogleButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('testing onPressG ',() => {
  const onPress = jest.fn();
  const wrapper = shallow(<GoogleButton onPress={onPress}/>);
  const button = wrapper.find('Styled(Button)').at(0);
  button.simulate('press');
});