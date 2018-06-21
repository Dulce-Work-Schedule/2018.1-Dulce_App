import 'react-native';
import React from 'react';
import Absences from '../../src/Components/Absences';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<Absences />)
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
  const spy = jest.spyOn(Absences.prototype,'setState');

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(spy)
        }
      />
    )
    .getInstance();

  absencesScreen.onSelectDates(start, end);
});

it('should test onSelectDates correctly', () => {

  const spy = jest.spyOn(Absences.prototype,'setState');

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(spy)
        }
      />
    )
    .getInstance();

  absencesScreen.onSelectAbsence('absence');
});

it('should press the useless button', () => {
  const wrapper = shallow(<Absences />);
  const button = wrapper.find('AGRButton').at(0);
  button.simulate('press');
});

it('should test onSelectDates correctly', () => {

  const response = {
    didCancel: true,
    error: false,
    customButton: false
  };

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(true)
        }
      />
    )
    .getInstance();

  absencesScreen.getDocument(response);
});

it('should test onSelectDates correctly', () => {

  const response = {
    didCancel: false,
    error: true,
    customButton: false
  };

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(true)
        }
      />
    )
    .getInstance();

  absencesScreen.getDocument(response);
});

it('should test onSelectDates correctly', () => {

  const response = {
    didCancel: false,
    error: false,
    customButton: true
  };

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(true)
        }
      />
    )
    .getInstance();

  absencesScreen.getDocument(response);
});

it('should test onSelectDates correctly', () => {
  const spy = jest.spyOn(Absences.prototype,'setState');

  const response = {
    didCancel: false,
    error: false,
    customButton: false
  };

  let absencesScreen = renderer
    .create(
      <Absences
        dispatch={action =>
          expect(action)
          .toEqual(spy)
        }
      />
    )
    .getInstance();

  absencesScreen.getDocument(response);
});

it(' testing onsucess DateRangePicker', () => {
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

  const wrapper = shallow(<Absences/>);
  wrapper.setState({startDay: startDay});
  wrapper.setState({endDay: endDay});
  const dateRanger = wrapper.find('DateRangePicker').at(0).dive();
  const calendar = dateRanger.find('Calendar').at(0);
  const onSucess = calendar.props().onSuccess(startDay,endDay);
  console.log(onSucess);
});

it('testing onPress CardItem', () => {

  const wrapper = shallow(<Absences />);
  console.log(wrapper.debug());
  const cardItem = wrapper.find('Styled(CardItem)').at(2);
  const button = cardItem.find('AGRButton').at(0);
  button.simulate('press');
  console.log(cardItem.debug());

});

