import React from 'react';
import ListElements from '../../src/Components/ListElements';
// import {findById} from '../../__mocks__/find_component_by_id';
// import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

// it('should call onPress correctly', () => {
//   const id = 'test';
//   const onPressMock = jest.fn();
//   let tree = renderer.create(
//     <ListElements
//       testID={id}
//       list={list}
//       onPress = {onPressMock}
//     />
//   ).toJSON();
//   const item = findById(tree, id);
//   console.log(item);
//   item.simulate('press');
//   expect(onPressMock).toBeCalled();
// });
