import React from 'react';
import 'react-native';
import ProfileManagerScreen from '../../src/Screens/ProfileManagerScreen';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
// import {shallow} from 'enzyme';
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
