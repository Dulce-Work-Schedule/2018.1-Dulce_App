import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../../src/Screens/ProfileScreen';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
require('bezier');
Enzyme.configure({adapter: new Adapter()});

const props = {

  navigation: {
    state: {
      params: {
        userId: 1
      }
    }
  }
};
test('renders correctly' , () => {
  const tree = renderer
  .create(<ProfileScreen {...props} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('testing axios', async () => {
  const wrapper = shallow(<ProfileScreen {...props}/>);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});

// it('testing onPress null', async() => {
//   const wrapper = shallow(<ProfileScreen {...props}/>);
//   await flushPromises();
//   wrapper.update();
//   // const scale = wrapper.find('ScaleItem').at(0);
//   expect(undefined).toBe(undefined);
// });
