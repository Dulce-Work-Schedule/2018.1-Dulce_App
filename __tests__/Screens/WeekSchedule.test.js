
import React from 'react';
import renderer from 'react-test-renderer';
import WeekSchedule from '../../src/Screens/WeekSchedule';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

require('bezier');
Enzyme.configure({adapter: new Adapter()});
// var mock = new MockAdapter(axios);

const props = {
  navigation: {
    state: {
      params: {
        userId: 1
      },
      visible: false
    }
  }
};
test('renders correctly' , () => {
  const tree = renderer
  .create(<WeekSchedule {...props} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('axios schedule request', async () => {
//
//   const response = {
//     employee: 'employee',
//     start_time: '1:00',
//     end_time: '1:00',
//     amount_of_hours: '12'
//   };
//
//   mock.onGet('http://172.18.0.1:8091/api/schedule/listYear')
//   .reply(200,{response});
//
// });

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<WeekSchedule/>);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});
