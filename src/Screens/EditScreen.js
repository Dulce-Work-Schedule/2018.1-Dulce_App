import {editScreen as styles} from './styles' ;
import React from 'react';
import {View} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import ValidationComponent from 'react-native-form-validator';
//import store from '../Reducers/store';
//import axios from 'axios';
import {Container} from 'native-base';
import t from 'tcomb-form-native';
import SignUpButton from '../Components/SignUpButton';
import SideBar from '../Components/SideBar';

const Form = t.form.Form;

export default class EditScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.Service = t.struct({
      nome: t.String,
      email: t.String,
      senha: t.String,
      confirmarSenha: t.String
    });
    this.state = {
      value: default_state
    };
    this.options = {
      fields: default_field_options,
      stylesheet: formStyles
    };
  }

  onChange(value) {
    this.setState({value});
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <Container style={{flex: 8, backgroundColor: '#FFF'}}>
          <ScreenHeader title='Editar conta' />
          <View style={styles.container}>
            <Form
              ref='form'
              options={this.options}
              value={this.state.value}
              type={this.Service}
              onChange={(v) => this.onChange(v)}
            />
          </View>
          <SignUpButton
            text = 'Salvar'
            onPress = {() => {}}
            style = {styles.button}
            icon= 'save'
          />
        </Container>
      </View>
    );
  }
}
const formStyles = {
  ...Form.stylesheet,
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 3,
    fontWeight: '600'
  }
};

const default_field_options = {
  Nome: {
    error: 'Campo obrigatório'
  },
  confirmarSenha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  },
  Email: {
    error: 'Campo obrigatório'
  },
  senha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  }
};

const default_state = {
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: ''
};
