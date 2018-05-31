import React from 'react';
import 'react-native';
import HospitalsScreen from '../../src/Screens/HospitalsScreen';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<HospitalsScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
