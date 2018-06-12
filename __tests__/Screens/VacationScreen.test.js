import React from 'react';
import 'react-native';
import VacationScreen from '../../src/Screens/VacationScreen';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<VacationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test onSelectDates correctly', () => {
  // This is to test component functions
  const start = {
    year: '2018',
    month: '06',
    day: '03',
    dateString: '2018-06-03'
  };
  const end = {
    year: '2018',
    month: '06',
    day: '04',
    dateString: '2018-06-04'
  };
  const spy = jest.spyOn(VacationScreen.prototype,'setState');

  let vacationScreen = renderer
    .create(
      <VacationScreen
        dispatch={action =>
          expect(action)
          .toEqual(spy)
        }
      />
    )
    .getInstance();

  vacationScreen.onSelectDates(start, end);
});

it('should press the useless button', () => {
  const wrapper = shallow(<VacationScreen />);
  const button = wrapper.find('AGRButton').at(0);
  button.simulate('press');
});

it('testing onsucess DateRangePicker Vacation', () => {
  const startDay = {
    year: 2018,
    month: 6,
    day: 11
  };
  const endDay = {
    year: 2018,
    month: 6,
    day: 11
  };

  const wrapper = shallow(<VacationScreen/>);
  console.log(wrapper.debug());
  wrapper.setState({startDay: startDay});
  wrapper.setState({endDay: endDay});
  const dateRanger = wrapper.find('DateRangePicker').at(0).dive();
  const calendar = dateRanger.find('Calendar').at(0);
  const onSucess = calendar.props().onSuccess(startDay,endDay);
  console.log(onSucess);
});
