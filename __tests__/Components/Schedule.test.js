import React from 'react';
import renderer from 'react-test-renderer';
import Schedule from '../../src/Components/Schedule';
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
  .create(<Schedule {...props} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<Schedule/>);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});

it('should test rowHasChanged correctly', () => {
// This is to test component functions
  let weekSchedule = renderer
  .create(
    <Schedule
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
    <Schedule
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
    <Schedule
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
    <Schedule
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
    <Schedule
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
    <Schedule
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
    <Schedule
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
    '06-18-2018': {
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
    <Schedule
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
    <Schedule
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
    <Schedule
      dispatch={action =>
        expect(action)
        .toEqual(Alert.alert)
      }
    />
  )
  .getInstance();

  weekSchedule.requestChange();
});

jest.mock('Alert', () => {
  return {
    alert: jest.fn()
  };
});

it('should test the alert when there is no schedule created', async() => {
  const wrapper = shallow(<Schedule/>);
  await flushPromises();
  wrapper.update();
  expect(Alert.alert).toHaveBeenCalled();
});

it('Testing fab',() => {
  const spy = jest.spyOn(Schedule.prototype, 'timePickerVisible');
  const wrapper = shallow(<Schedule />);
  wrapper.setState({active: true});
  const fab = shallow(wrapper.instance().fab());
  fab.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('Testing timePicker onConfirm', () => {

  const spy = jest.spyOn(Schedule.prototype, 'showEndDateTimePicker');
  const wrapper = shallow(<Schedule/>);
  wrapper.setState({isDateTimePickerVisible: true});
  const timePicker = shallow(wrapper.instance().timePicker());
  const onConfirm = timePicker.find('TouchableHighlight').at(0);
  onConfirm.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('Testing timePicker onCancel', () => {
  const spy = jest.spyOn(Schedule.prototype, 'showEndDateTimePicker');
  const wrapper = shallow(<Schedule/>);
  wrapper.setState({isDateTimePickerVisible: true});
  const timePicker = shallow(wrapper.instance().timePicker());
  const onCancel = timePicker.find('TouchableHighlight').at(1);
  onCancel.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('Testing finalPicker onConfirm', () => {

  const spy = jest.spyOn(Schedule.prototype, 'alert_Selfchange');
  const wrapper = shallow(<Schedule/>);
  wrapper.setState({isDateTimePickerVisible: true});
  const finalPicker = shallow(wrapper.instance().finalPicker());
  const onConfirm = finalPicker.find('TouchableHighlight').at(0);
  onConfirm.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('Testing finalPicker onCancel', () => {

  const spy = jest.spyOn(Schedule.prototype, 'timePickerVisible');
  const wrapper = shallow(<Schedule/>);
  wrapper.setState({isDateTimePickerVisible: true});
  const finalPicker = shallow(wrapper.instance().finalPicker());
  const onCancel = finalPicker.find('TouchableHighlight').at(1);
  onCancel.simulate('press');
  expect(spy).toHaveBeenCalled();
});

// it('testing renderItem function', async() => {
//   const item = {
//     'start_time': '2018-06-24T08:00',
//     'end_time': '2018-06-24T18:00',
//     'profile_id': '1',
//     'sector_id': '1'
//   };
//   const spy = jest.spyOn(Schedule.prototype, 'setNames');
//   const wrapper = shallow(<Schedule/>);
//   wrapper.setState({currentSchedule: item});
//   console.log(wrapper.debug());
//   const renderI = shallow(wrapper.instance().renderItem(item));
//   await flushPromises();
//   wrapper.update();
//   renderI.simulate('press');
//   expect(spy).toHaveBeenCalled();
//
// });

// it('testing renderChangeItem function', () => {
//   const item = {
//     employee: 'Ezequiel',
//     specialty: 'Making tests',
//     start_time: '08:00',
//     end_time: '10:00',
//     amount_of_hours: '2h'
//   };
//   const spy = jest.spyOn(Schedule.prototype, 'alert_change');
//   const wrapper = shallow(<Schedule/>);
//   const renderC = shallow(wrapper.instance().renderChangeItem(item));
//   renderC.simulate('press');
//   expect(spy).toHaveBeenCalled();
// });

it('Testing renderModal function',() => {
  const spy = jest.spyOn(Schedule.prototype, 'setModalVisible');
  const wrapper = shallow(<Schedule/>);
  wrapper.setState({modalVisible: true});
  const Modal = shallow(wrapper.instance().renderModal());
  const button = Modal.find('ReactNativeModal').at(0).dive();
  const backButton = button.find('TouchableWithoutFeedback').at(0);
  backButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});

// // it('alert_change onPress Não', () => {
// //   jest.mock('Alert',() => {
// //     return {
// //       alert: jest.fn()
// //     };
// //   }
// // );
// //
// //   const wrapper = shallow(<Schedule />);
// //
// //   wrapper.instance().alert_change(jest.fn());
// //   Alert.alert.mock.calls[0][2][0].onPress();
// // });
//
// // it('alert_change onPress Sim', () => {
// //   jest.mock('Alert',() => {
// //     return {
// //       alert: jest.fn()
// //     };
// //   });
// //
// //   const wrapper = shallow(<Schedule />);
// //   wrapper.instance().alert_change(jest.fn());
// //   Alert.alert.mock.calls[0][2][1].onPress();
// //
// // });
// //
// // it('_alert onPress Não', () => {
// //
// //   jest.mock('Alert',() => {
// //     return {
// //       alert: jest.fn()
// //     };
// //   });
// //
// //   const wrapper = shallow(<Schedule />);
// //
// //   wrapper.instance()._alert(jest.fn());
// //   Alert.alert.mock.calls[1][2][0].onPress();
// // });
// //
// // it('_alert onPress Sim', () => {
// //
// //   jest.mock('Alert',() => {
// //     return {
// //       alert: jest.fn()
// //     };
// //   });
// //
// //   const wrapper = shallow(<Schedule />);
// //
// //   wrapper.instance()._alert(jest.fn());
// //   Alert.alert.mock.calls[1][2][1].onPress();
// // });
//
// it('alert_Selfchange onPress Não', () => {
//
//   const date = new Date();
//
//   jest.mock('Alert',() => {
//     return {
//       alert: jest.fn()
//     };
//   });
//
//   const wrapper = shallow(<Schedule />);
//
//   wrapper.instance().alert_Selfchange(date);
//   Alert.alert.mock.calls[3][2][0].onPress();
// });
//
// it('alert_Selfchange onPress Sim', () => {
//
//   jest.mock('Alert',() => {
//     return {
//       alert: jest.fn()
//     };
//   });
//
//   const date = new Date();
//   const wrapper = shallow(<Schedule />);
//
//   wrapper.instance().alert_Selfchange(date);
//   Alert.alert.mock.calls[3][2][1].onPress();
// });


it('should test axiosProfile', async() => {
  const wrapper = shallow(<Schedule sector={true} />);
  wrapper.instance().axiosProfile(1,true);
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
});

it('should test axiosUser true', async() => {
  const wrapper = shallow(<Schedule sector={true} />);
  wrapper.instance().axiosUser(1,true);
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
});

it('should test axiosUser false', async() => {
  const wrapper = shallow(<Schedule sector={true} />);
  wrapper.instance().axiosUser(1,false);
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
});

it('should test renderItem', async() => {
  const item = {
    'start_time': '2018-06-24T08:00',
    'end_time': '2018-06-24T18:00',
    'profile_id': '1',
    'sector_id': '1'
  };
  const spy = jest.spyOn(Schedule.prototype, '_alert');
  const wrapper = shallow(<Schedule sector={false}/>);
  const render = shallow(wrapper.instance().renderItem(item));
  render.setState({loading: false});
  console.log(render.debug());
  const button = render.find('TouchableHighlight').at(0);
  button.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('should test renderChangeItem', () => {
  const item = {
    'start_time': '2018-06-24T08:00',
    'end_time': '2018-06-24T18:00',
    'profile_id': '1',
    'sector_id': '1'
  };
  const spy = jest.spyOn(Schedule.prototype, 'setNames');
  const wrapper = shallow(<Schedule sector={false}/>);
  const render = shallow(wrapper.instance().renderChangeItem(item));
  render.setState({loading: false});
  console.log(render.debug());
  const button = render.find('TouchableHighlight').at(0);
  button.simulate('press');
  expect(spy).toHaveBeenCalled();
});

it('should test if in selfChange', () => {
  const date = '2018-06-24T18:00';
  const wrapper = shallow(<Schedule sector={false}/>);
  wrapper.setState({finalDateString: false});
  wrapper.update();
  wrapper.instance().alert_Selfchange(date);
});

//
// it('_alert onPress Não', () => {
//
//   jest.mock('Alert',() => {
//     return {
//       alert: jest.fn()
//     };
//   });
//
//   const wrapper = shallow(<Schedule />);
//
//   wrapper.instance()._alert(jest.fn());
//   Alert.alert.mock.calls[0][2][0];
// });
