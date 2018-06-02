import React from 'react';
import ListElements from '../../src/Components/ListElements';
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
