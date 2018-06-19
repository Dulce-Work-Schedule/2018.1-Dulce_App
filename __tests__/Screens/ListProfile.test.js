import React from 'react';
import renderer from 'react-test-renderer';
import ListProfile from '../../src/Screens/ListProfile';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('bezier');


// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

require('bezier');
Enzyme.configure({adapter: new Adapter()});

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<ListProfile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Testing fab',() => {
  const navigation  = {navigate: jest.fn()};
  const wrapper = shallow(<ListProfile navigation={navigation}/>);
  wrapper.setState({active: true});
  const fab = shallow(wrapper.instance().fab());
  fab.props().onPress();  
});

it('testing renderCard onPress',()=>{

  const item = {
    name : "ezequiel",
    setor: "gama",
    hospital: "fga"
  };
  const wrapper = shallow(<ListProfile />);
  const renderCard = shallow(wrapper.instance().renderCard(item));
  const cardItem = renderCard.find('Styled(CardItem)').at(0);
  cardItem.props().onPress();
  console.log(cardItem.debug());
  
});
