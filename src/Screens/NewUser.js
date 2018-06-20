import React from 'react';
import {View,Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container} from 'native-base';
import SignUpButton from '../Components/SignUpButton';
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
      fields: default_field_options,
      stylesheet: formStyles
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
          })
          .catch((err) => {
            Alert.alert('Erro!', err.response.data.message);
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

    return (
      <Container style={{backgroundColor: '#FFF'}}>
        <ScreenHeader title = 'Criar nova conta'/>
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
          <SignUpButton
            text = 'Cadastrar'
            onPress = {(v) => this._onPress(v)}
          />
        </View>
      </Container>
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

export default NewUser;
