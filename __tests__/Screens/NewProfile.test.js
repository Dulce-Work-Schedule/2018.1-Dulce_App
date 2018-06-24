import React from 'react';
import renderer from 'react-test-renderer';
import NewProfile from '../../src/Screens/NewProfile';
import 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
// import t from 'tcomb-form-native';

require('bezier');
Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<NewProfile navigation={{}} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test onChange correctly', () => {
// This is to test component functions
  let newProfile = renderer
  .create(
    <NewProfile
      navigation={{}}
      dispatch={action =>
        expect(action)
        .toEqual(true)
      }
    />
  )
  .getInstance();

  newProfile.onChange();
});

it('should test onValueChange correctly', () => {
// This is to test component functions
  let newProfile = renderer
  .create(
    <NewProfile
      navigation={{}}
      dispatch={action =>
        expect(action)
        .toEqual(true)
      }
    />
  )
  .getInstance();

  newProfile.onValueChange();
});

it('should test onValueChange correctly', () => {
// This is to test component functions
  let newProfile = renderer
  .create(
    <NewProfile
      navigation={{}}
      dispatch={action =>
        expect(action)
        .toEqual(true)
      }
    />
  )
  .getInstance();

  newProfile.onValueChange();
});
it('should test onValueChange correctly', () => {
// This is to test component functions
  let newProfile = renderer
  .create(
    <NewProfile
      navigation={{}}
      dispatch={action =>
        expect(action)
        .toEqual(true)
      }
    />
  )
  .getInstance();

  newProfile.onValueChange();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('Should call createProfile function', async() => {
  const navigation = jest.fn();
  const value = {
    matricula: '12345',
    especialidade: '12345'
  };
  const spy = jest.spyOn(NewProfile.prototype, 'createProfile');
  const wrapper = shallow(<NewProfile navigation = {navigation} />);
  console.log(wrapper.debug);
  wrapper.setState({value: value});
  await flushPromises();
  wrapper.update();
  const enterButton = wrapper.find('AGRButton').at(0);
  enterButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});

// it('Should call goBack function newProfile', async() => {
//   const navigation = jest.fn();
//   const _goBack = jest.fn();
//   const spy = _goBack;
//   const wrapper = shallow(<NewProfile navigation = {navigation} />);
//   console.log(wrapper.debug());
//
//   const header = wrapper.find('ScreenHeader').at(0).dive();
//   const goback = header.find('Styled(Button)').at(0);
//   console.log(header.debug());
//   console.log(goback.simulate('press'));
//   // expect(spy).toHaveBeenCalled();
// });

// it('Should call selectHospital function', async() => {
//   const navigation = jest.fn();
//   const value = {
//     matricula: '12345',
//     especialidade: '12345'
//   };
//   // const hospitals = [
//   //   {
//   //     name: 'firstHospital',
//   //     id: '12345'
//   //   },
//   //   {
//   //     name: 'secondHospital',
//   //     id: '123456'
//   //   }
//   // ];
//   const spy = jest.spyOn(NewProfile.prototype, 'selectHospital');
//   const wrapper = shallow(<NewProfile navigation = {navigation} />);
//   // wrapper.setState({hospitals: hospitals, loadingHospital: false});
//   console.log(wrapper.debug());
//   wrapper.setState({value: value});
//   await flushPromises();
//   wrapper.update();
//   const selectHospital = wrapper.find('PickerItem').at(5);
//   selectHospital.simulate('press');
//   expect(spy).toHaveBeenCalled();
// });
