import React from 'react';
import 'react-native';
import EmployeeProfileScreen from '../../src/Screens/EmployeeProfileScreen';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<EmployeeProfileScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('render data',() => {
  const wrapper = shallow(<EmployeeProfileScreen />);
  const employee_example = {
    name: 'Doctor Example',
    registration: '123456',
    sector: 'Sector Example'
  };
  wrapper.setState({employee: employee_example});
  wrapper.setState({loading: false});

  const nameField = wrapper.find('Text').at(0);
  const nameFieldText = nameField.dive().text();
  expect(nameFieldText).toBe(employee_example.name);

  const registrationField = wrapper.find('Text').at(1);
  const registrationFieldText = registrationField.dive().text();
  expect(registrationFieldText).toBe('CRM/Matricula:' + employee_example.registration);

  const sectorField = wrapper.find('Text').at(2);
  const sectorFieldText = sectorField.dive().text();
  expect(sectorFieldText).toBe('setor: ' + employee_example.sector);

});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<EmployeeProfileScreen />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});

it('should test goToEditScreen correctly', () => {
  // This is to test component functions
  const navigation = {navigate: jest.fn()};
  let employeeScreen = renderer
    .create(
      <EmployeeProfileScreen
      navigation={navigation}
        dispatch={action =>
          expect(action)
          .toEqual(navigation.navigate)
        }
      />
    )
    .getInstance();

  employeeScreen.goToEditScreen();
});

it('Should call function when button is pressed', async() => {
  const navigation = {navigate: jest.fn()};
  const spy = jest.spyOn(EmployeeProfileScreen.prototype, 'goToEditScreen');
  const wrapper = shallow(<EmployeeProfileScreen navigation={navigation} />);
  await flushPromises();
  wrapper.update();
  const enterButton = wrapper.find('AGRButton').at(0);
  enterButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});
