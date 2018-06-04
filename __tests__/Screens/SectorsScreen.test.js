import 'react-native';
import React from 'react';
import SectorsScreen from '../../src/Screens/SectorsScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
  .create(<SectorsScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test onPressItem correctly', () => {
  // This is to test component functions
  const navigation = {navigate: jest.fn()};
  let sectorScreen = renderer
    .create(
      <SectorsScreen
      navigation={navigation}
        dispatch={action =>
          expect(action)
          .toEqual(navigation.navigate)
        }
      />
    )
    .getInstance();

  sectorScreen._onPressButton();
});
