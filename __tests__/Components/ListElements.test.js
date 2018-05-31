import React from 'react';
import ListElements from '../../src/Components/ListElements';
import Adapter from 'enzyme-adapter-react-16';
// import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
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

// it('Testing onPress', () => {
//   const onPressMock = jest.fn();
//   const wrapper = shallow(<ListElements title={title} list={list} onPress = {onPressMock}/>);
//   const list_item = wrapper.find('Styled(List)').first().at(0);
//   list_item.simulate('press');
//   expect(onPressMock).toBeCalled();
// });
