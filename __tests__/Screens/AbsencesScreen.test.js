import 'react-native';
import React from 'react';
import AbsencesScreen from '../../src/Screens/AbsencesScreen';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<AbsencesScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('save button', () => {
//   const wrapper = shallow(<AbsencesScreen />);
//   const onPickImage = jest.fn();
//   const pickerButton = wrapper.find('TouchableOpacity').at(0);

//   wrapper.setState({editable: true});
//   wrapper.instance().save = onPickImage;
//   wrapper.setProps({});
//   pickerButton.simulate('press');
//   expect(onPickImage).toBeCalled();
// });
