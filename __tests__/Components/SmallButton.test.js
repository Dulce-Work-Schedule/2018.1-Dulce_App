import React from 'react';
import AGRButton from '../../src/Components/SmallButton';
import renderer from 'react-test-renderer';
import SmallButton from '../../src/Components/SmallButton';
require ('bezier');

it('renders correctly', () => {
    const tree = renderer
    .create(<SmallButton />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  