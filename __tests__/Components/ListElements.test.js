import React from 'react';
import ListElements from '../../src/Components/ListElements';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
require('bezier');

require('bezier');

Enzyme.configure({adapter: new Adapter()});

const list = ['Exemple1'];
const title = 'Title Example';

it('renders correctly', () => {
  const tree = renderer
  .create(<ListElements title={title} list={list}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing ListElements', () => {

  const onPressMock = jest.fn();
  const wrapper = shallow(<ListElements onPress={onPressMock}/>);
  const List = wrapper.find('Styled(List)').at(0);
  const renderR = shallow(List.props().renderRow());
  renderR.props().onPress();
  expect(onPressMock).toBeCalled();

});
