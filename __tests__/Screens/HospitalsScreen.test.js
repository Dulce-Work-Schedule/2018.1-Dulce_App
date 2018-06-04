import React from 'react';
import 'react-native';
import HospitalsScreen from '../../src/Screens/HospitalsScreen';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import expect from 'expect';

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<HospitalsScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test onPressItem correctly', () => {
  // This is to test component functions
  const navigation = {navigate: jest.fn()};
  let hospitalScreen = renderer
    .create(
      <HospitalsScreen
      navigation={navigation}
        dispatch={action =>
          expect(action)
          .toEqual(navigation.navigate)
        }
      />
    )
    .getInstance();

  hospitalScreen.onPressItem();
});
