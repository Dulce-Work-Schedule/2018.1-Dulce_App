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
