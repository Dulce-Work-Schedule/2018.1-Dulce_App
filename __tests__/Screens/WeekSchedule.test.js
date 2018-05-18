import React from 'react';
import renderer from 'react-test-renderer';
import WeekSchedule from '../../src/Screens/WeekSchedule';

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
