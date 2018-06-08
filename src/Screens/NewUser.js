import React, {Component} from 'react';
import {Text,
         View,
         ScrollView,
         StyleSheet,
         TouchableHighlight,
         Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container,Content,Button} from 'native-base';
import SignUpButton from '../Components/SignUpButton';

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 5,
    padding: 10,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  item: {
    borderBottomWidth: 1
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
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
      senha: t.senha,
      confirmarSenha: t.confirmarSenha
    };
    this.options = {
      fields: {
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
      },
      stylesheet: formStyles
    };
  }

  onChange(value) {
    this.setState({value});
  }

  onPress() {
    const senha = this.refs.form.getComponent('senha').refs.input.focus();
    const confirmarSenha = this.refs.form.getComponent('confirmarSenha').refs.input.focus();
    if (this.state.senha === this.state.confirmarSenha) {
      Alert.alert('Cadastro feito com sucesso!');
    }
    else {
      Alert.alert('As senhas devem ser iguais!');
    }
  }
  render() {

    return (
      <Container style={{backgroundColor: '#FFF'}}>
        <ScreenHeader title = 'Criar nova conta' />
        <View style={styles.container}>
          <Form
            ref='form'
            type={this.Service}
            options={this.options}
            value={this.state.value}
          />
        </View>
        <View style={{flex: 1}}>
          <SignUpButton
            text = 'Cadastrar'
            onPress = {() => {this.onPress();}}
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
    fontSize: 18,
    marginBottom: 7,
    fontWeight: '600'
  }
};

export default NewUser;
