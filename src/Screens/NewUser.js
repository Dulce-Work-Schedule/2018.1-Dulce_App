import React from 'react';
import {View,Alert, ScrollView} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from '../Components/Form';
import AGRButton from '../Components/AGRButton';
import {newUser as styles} from './styles' ;
import axios from 'axios';

const default_state = {
  primeiroNome: '',
  segundoNome: '',
  email: '',
  senha: '',
  confirmarSenha: ''
};
const default_field_options = {
  primeiroNome: {
    error: 'Campo obrigatório'
  },
  segundoNome: {
    error: 'Campo obrigatório'
  },
  email: {
    error: 'Campo obrigatório'
  },
  senha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  },
  confirmarSenha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  }
};
const Form = t.form.Form;

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.NewUser = t.struct({
      primeiroNome: t.String,
      segundoNome: t.String,
      email: t.String,
      senha: t.String,
      confirmarSenha: t.String
    });
    this.state = {
      value: default_state
    };
    this.options = {
      fields: default_field_options
    };
  }

  onChange(value) {
    this.setState({value});
  }

  _onPress() {
    if (this.state.value.primeiroNome !== '' && this.state.value.segundoNome !== '' && this.state.value.email !== '') {
      if (this.state.value.senha === this.state.value.confirmarSenha) {
        const url = 'http://52.67.4.137:8083/api/user/create';
        axios.post(url, {
          firstName: this.state.value.primeiroNome,
          lastName: this.state.value.segundoNome,
          email: this.state.value.email,
          password: this.state.value.senha
        })
          .then((response) => {
            var error = '';
            if (response.data.email_valid_error) {
              error += response.data.email_valid_error;
            }
            if (response.data.email_duplicate_error) {
              error += response.data.email_duplicate_error;
            }
            if (error !== '') {
              Alert.alert('Erro!', error);
            } else {
              this.props.navigation.navigate('login');
              Alert.alert('Cadastro feito com sucesso!');
            }
          });
      }
      else {
        Alert.alert('As senhas devem ser iguais!');
      }
    } else {
      Alert.alert('Os campos não podem estar vazios!');
    }
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <ScreenHeader title = 'Criar nova conta' goBack={() => goBack()}/>
        <View style={styles.container}>
          <Form
            ref='form'
            type={this.NewUser}
            value={this.state.value}
            options={this.options}
            onChange={(v) => this.onChange(v)}
          />
        </View>
        <View style={{flex: 1}}>
          <AGRButton
            text = 'Cadastrar'
            onPress = {(v) => this._onPress(v)}
          />
        </View>
      </ScrollView>
    );
  }
}

export default NewUser;
