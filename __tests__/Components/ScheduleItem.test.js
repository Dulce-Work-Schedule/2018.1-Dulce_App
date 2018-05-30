import React from 'react';
import ScheduleItem from '../../src/Components/ScheduleItem';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

const item = {
  employee: 'Example',
  specialty: 'Passing tests',
  start_time: '09:00',
  end_time: '17:00',
  amount_of_hours: '8h'
};

it('renders correctly', () => {
  const tree = renderer
  .create(<ScheduleItem item={item}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
