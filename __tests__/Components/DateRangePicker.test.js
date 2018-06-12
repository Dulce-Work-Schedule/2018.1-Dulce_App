import React from 'react';
import 'react-native';
import DateRangePicker from '../../src/Components/DateRangePicker';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<DateRangePicker />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test onDayPress call to setupStartMarker', () => {
  const spy = jest.spyOn(DateRangePicker.prototype, 'setupStartMarker');
  const day = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };

  let dateRangePicker = renderer
    .create(
      <DateRangePicker
        dispatch={action =>
          expect(action)
          .toEqual(spy)
        }
      />
    )
    .getInstance();

  dateRangePicker.onDayPress(day);
});

it('should test onPress day call to on', () => {
  const success = jest.fn();

  const day = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };

  const wrapper = shallow(<DateRangePicker onSuccess={success}/>);
  wrapper.setState({isFromDatePicked: true});
  wrapper.setState({isToDatePicked: false});
  wrapper.setState({fromDate: day});

  console.log(wrapper.instance().onDayPress(day));
  // const press = shallow(wrapper.instance().onDayPress(day));
});

it('should test onPress day call to have more than one date', () => {
  const success = jest.fn();
  const day = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };
  const day2 = {
    year: '2018',
    month: '06',
    day: '05',
    dateString: '2018-06-05'
  };


  const wrapper = shallow(<DateRangePicker onSuccess={success}/>);
  wrapper.setState({isFromDatePicked: true});
  wrapper.setState({isToDatePicked: false});
  wrapper.setState({fromDate: day});
  wrapper.setState({toDate: day2});

  console.log(wrapper.instance().onDayPress(day2));

});

it('should test onPress day call when end date is before the start date', () => {
  const success = jest.fn();
  const day = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };
  const day2 = {
    year: '2018',
    month: '06',
    day: '01',
    dateString: '2018-06-01'
  };


  const wrapper = shallow(<DateRangePicker onSuccess={success}/>);
  wrapper.setState({isFromDatePicked: true});
  wrapper.setState({isToDatePicked: false});
  wrapper.setState({fromDate: day});
  wrapper.setState({toDate: day2});

  console.log(wrapper.instance().onDayPress(day2));

});

it('should test onDayPress on  render',() => {

  const day = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };
  const wrapper = shallow(<DateRangePicker/>);
  const onDayPress = wrapper.props().onDayPress(day);
  console.log(onDayPress);
});
