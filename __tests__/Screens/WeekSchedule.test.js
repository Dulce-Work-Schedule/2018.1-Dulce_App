import React from 'react';
import renderer from 'react-test-renderer';
import WeekSchedule from '../../src/Screens/WeekSchedule';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

require('bezier');
var mock = new MockAdapter(axios);
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
  .create(<WeekSchedule {...props} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

mock.onGet('/api/schedule/listMonth').reply(200,{
  items: [{employee: '160119316',start_time: '13:00',end_time: '19:00',amount_of_hours: '06'}]
});

axios.get('/api/schedule/listMonth')
.then(function(response) {
  console.log(response.data);
});
