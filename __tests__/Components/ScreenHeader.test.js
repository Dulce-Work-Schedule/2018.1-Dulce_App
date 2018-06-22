import React from 'react';
import ScreenHeader from '../../src/Components/ScreenHeader';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<ScreenHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should press the button', () => {
  const goBack = jest.fn();
  const wrapper = shallow(<ScreenHeader title = 'test' goBack = {() => goBack()}/>);
  const button = wrapper.find('Styled(Button)').at(0);
  button.simulate('press');
  expect(goBack).toHaveBeenCalled();
});
