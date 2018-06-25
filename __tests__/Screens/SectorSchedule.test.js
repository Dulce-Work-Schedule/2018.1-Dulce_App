import React from 'react';
import renderer from 'react-test-renderer';
import SectorSchedule from '../../src/Screens/SectorSchedule';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<SectorSchedule />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
