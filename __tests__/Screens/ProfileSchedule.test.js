import React from 'react';
import renderer from 'react-test-renderer';
import ProfileSchedule from '../../src/Screens/ProfileSchedule';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<ProfileSchedule />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
