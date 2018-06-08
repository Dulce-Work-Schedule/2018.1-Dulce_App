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
