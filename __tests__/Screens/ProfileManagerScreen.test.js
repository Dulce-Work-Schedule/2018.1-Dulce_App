import React from 'react';
import 'react-native';
import ProfileManagerScreen from '../../src/Screens/ProfileManagerScreen';

import renderer from 'react-test-renderer';

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
