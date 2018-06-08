import React from 'react';
import 'react-native';
import DateRangePicker from '../../src/Components/DateRangePicker';
import renderer from 'react-test-renderer';

require('bezier');

it('renders correctly', () => {
  const tree = renderer
  .create(<DateRangePicker />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
