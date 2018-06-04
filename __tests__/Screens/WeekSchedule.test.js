import React from 'react';
import renderer from 'react-test-renderer';
import WeekSchedule from '../../src/Screens/WeekSchedule';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {View} from 'react-native';
import {Alert} from 'react-native';
import ScheduleItem from '../../src/Components/ScheduleItem';
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

it('should test rowHasChanged correctly', () => {
  // This is to test component functions
  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(true)
        }
      />
    )
    .getInstance();

  weekSchedule.rowHasChanged(1,2);
});

it('should test renderEmptyDate correctly', () => {
  // This is to test component functions
  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(<View/>)
        }
      />
    )
    .getInstance();

  weekSchedule.renderEmptyDate();
});

it('should test timeToString correctly', () => {
  // This is to test component functions
  const date_string = '06/03/2018 08:00';
  const retrun_string = '2018-06-03';

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(retrun_string)
        }
      />
    )
    .getInstance();

  weekSchedule.timeToString(date_string);
});
it('should test renderChangeItem correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(<ScheduleItem/>)
        }
      />
    )
    .getInstance();

  weekSchedule.renderChangeItem();
});
it('should test renderItem correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(<ScheduleItem/>)
        }
      />
    )
    .getInstance();

  weekSchedule.renderItem();
});

it('should test alert_change correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(Alert.alert)
        }
      />
    )
    .getInstance();

  weekSchedule.alert_change('Employee Example');
});

it('should test _alert correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(Alert.alert)
        }
      />
    )
    .getInstance();

  weekSchedule._alert('Employee Example');
});

it('should test arrayToObject correctly', () => {
  // This is to test component functions

  const itemDateResponse = [{
    'date': '06/18/2018',
    'start_time': '08:00',
    'end_time': '18:00',
    'sector': 'Sector Example',
    'employee': 'Employee Example',
    'specialty': 'Specialty Example',
    'amount_of_hours': '10h'
  }];
  const item = {
    '06/18/2018': {
      'date': '06/18/2018',
      'start_time': '08:00',
      'end_time': '18:00',
      'sector': 'Sector Example',
      'employee': 'Employee Example',
      'specialty': 'Specialty Example',
      'amount_of_hours': '10h'
    }};

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(item)
        }
      />
    )
    .getInstance();

  weekSchedule.setState({itemDate: itemDateResponse});
  weekSchedule.arrayToObject();
});

it('should test setModalVisible correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(true)
        }
      />
    )
    .getInstance();

  weekSchedule.setModalVisible(true);
});

it('should test requestChange correctly', () => {
  // This is to test component functions

  let weekSchedule = renderer
    .create(
      <WeekSchedule
        dispatch={action =>
          expect(action)
          .toEqual(Alert.alert)
        }
      />
    )
    .getInstance();

  weekSchedule.requestChange();
});
