import React from 'react';
import {View,Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container} from 'native-base';
import SignUpButton from '../Components/SignUpButton';
import {newUser as styles} from './styles' ;
const default_state = {
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: ''
};
const default_field_options = {
  Nome: {
    error: 'Campo obrigatório'
  },
  Email: {
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

  _onPress() {
    if (this.state.value.nome !== '' && this.state.value.email !== '') {
      if (this.state.value.senha === this.state.value.confirmarSenha) {
        Alert.alert('Cadastro feito com sucesso!');
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
            type={this.Service}
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
