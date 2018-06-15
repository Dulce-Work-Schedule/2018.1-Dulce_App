import React from 'react';
import 'react-native';
import ProfileManagerScreen from '../../src/Screens/ProfileManagerScreen';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import expect from 'expect';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<ProfileManagerScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test navigateToEditScreen correctly', () => {
  // This is to test component functions
  const navigation = {navigate: jest.fn()};
  let profileScreen = renderer
    .create(
      <ProfileManagerScreen
      navigation={navigation}
        dispatch={action =>
          expect(action)
          .toEqual(navigation.navigate)
        }
      />
    )
    .getInstance();

  profileScreen.navigateToEditScreen();
});


it('testing edit button',() => {
  
  const navigation  = {navigate: jest.fn()};
  const spy = jest.spyOn(ProfileManagerScreen.prototype, 'navigateToEditScreen');
  const wrapper = shallow(<ProfileManagerScreen navigation={navigation}/>);
  wrapper.update();
  wrapper.setState({loading: false});
  const edit = wrapper.find('IconButton').at(0);
  edit.simulate('press');
  expect(spy).toHaveBeenCalled();
  console.log(edit);
});

it('testing delete button',() => {
  
  const navigation  = {navigate: jest.fn()};
  const spy = jest.spyOn(ProfileManagerScreen.prototype, '_alert');
  const wrapper = shallow(<ProfileManagerScreen navigation={navigation}/>);
  wrapper.update();
  wrapper.setState({loading: false});
  const edit = wrapper.find('IconButton').at(1);
  edit.simulate('press');
  expect(spy).toHaveBeenCalled();
  console.log(edit);
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<ProfileManagerScreen/>);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});