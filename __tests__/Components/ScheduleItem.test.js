import React from 'react';
import ScheduleItem from '../../src/Components/ScheduleItem';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

const item = {
  start_time: '2018-06-24T08:00',
  end_time: '2018-07-25T08:00',
  profile_id: '1',
  sector_id: '1'
};

it('renders correctly', () => {
  const tree = renderer
  .create(<ScheduleItem
            isSector={false}
            onPress={() => jest.fn()}
            item={item}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('Testing onPress', async() => {
  const onPressMock = jest.fn();
  const wrapper = shallow(<ScheduleItem item={item} isSector={true} onPress={onPressMock}/>);
  wrapper.setState({loading: false});
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
  const button = wrapper.find('TouchableHighlight').at(0);
  button.simulate('press');
  expect(onPressMock).toBeCalled();
});

it('should test profile', async() => {
  const wrapper = shallow(<ScheduleItem item={item} isSector={true} />);
  wrapper.instance().axiosProfile();
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
});

it('should test user', async() => {
  const wrapper = shallow(<ScheduleItem item={item} isSector={true} />);
  wrapper.instance().axiosUser();
  await flushPromises();
  wrapper.update();
  console.log(wrapper.debug());
});
