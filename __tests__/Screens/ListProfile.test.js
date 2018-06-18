import React from 'react';
import renderer from 'react-test-renderer';
import ListProfile from '../../src/Screens/ListProfile';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<ListProfile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing Fab\'s onPress', () => {
  const navigation = {navigate: jest.fn()};
  const wrapper = shallow(<ListProfile navigation={navigation} />);
  console.log(wrapper.debug());
  const fab = wrapper.find('Styled(Fab)');
  fab.simulate('press');
  expect(navigation.navigate).toHaveBeenCalled();
});
