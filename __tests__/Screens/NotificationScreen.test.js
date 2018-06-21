import React from 'react';
import 'react-native';
import NotificationScreen from '../../src/Screens/NotificationScreen';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

require('bezier');
Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
  .create(<NotificationScreen />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

/* it('onPress Aceitar',() => {

  const item = {
    name: 'ezequiel'
  }
const onPressMock = jest.fn();
const _root = jest.fn();
const wrapper = shallow(<NotificationScreen onPress={onPressMock}/>);
const List = wrapper.find('Styled(List)').at(0);
const renderR = shallow(List.props().renderRow(item));
const refused = renderR.find('ValidateButton').at(0);
refused.props().onPress();
}); */
