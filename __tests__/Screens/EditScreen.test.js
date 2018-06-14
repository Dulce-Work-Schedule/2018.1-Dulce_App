import 'react-native';
import React from 'react';
import EditScreen from '../../src/Screens/EditScreen';
import Adapter from 'enzyme-adapter-react-16';
//import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
//import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import t from 'tcomb-form-native';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<EditScreen />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test onChange value',() => {
  const wrapper = shallow(<EditScreen/>);
  const onChange = wrapper.instance().onChange();
  console.log(onChange);
});

it('testing onChange container',() => {
  const type = t.struct({
    nome: t.String,
    email: t.String,
    senha: t.String,
    confirmarSenha: t.String
  });
  const wrapper = shallow(<EditScreen type={type}/>);
  const container = wrapper.find('Styled(Container)').at(0);
  const form = container.find('Form').at(0);
  form.props().onChange();
});

//const flushPromises = () => new Promise(resolve => setImmediate(resolve));
//
// it('testing axios', async () => {
//   const wrapper = shallow(<EditScreen />);
//   await flushPromises();
//   wrapper.update();
//   expect(wrapper).toMatchSnapshot();
// });
