import React from 'react';
import {View, TextInput, Image, Alert} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import BotaoTransparente from '../Components/BotaoTransparente';
import axios from 'axios';

const logo = require('../../assets/img/logo.png');

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 50
  },
  input: {
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 36,
    color: '#039200'

  },
  logo: {
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: 40
  }
};

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  _onPressButton() {
    if (this.state.password === '' || this.state.username === '') {
      Alert.alert(
        'Alguns campos ainda estão vazios',
        'Para entrar preencha corretamente os campos de matrícula e senha.'
      );
    } else if (this.state.password.length < 6) {
      Alert.alert(
        'Sua senha é muito curta',
        'A senha deve ter no minimo 6 caracteres.'
      );
    } else {
      //this.props.navigation.navigate('initial');
      this.login();
      /*Alert.alert(
        'Dados',
        this.state.username + '\n' +
        this.state.password
      );*/
    }
  }

  login(){
    axios.post('http://localhost:3000/auth/users', {
      username: this.state.username,
      password: this.state.password
    })
      .then((ameixa) => {
        return this.props.navigation.navigate('users');
      })
      .catch((error) => {
        if (error.response) {
          Alert.alert(
            'Erro 1'
          );
          console.log(error.response);
        } else if (error.request) {
          Alert.alert(
            'Erro 2'
          );
          console.log(error.request);
        } else {
          Alert.alert(
            'Erro 3'
          );
          console.log(error.messege);
        }
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <AGRInput
          autoCapitalize='none'
          placeholder='Usuário'
          onChangeText={(text) => this.setState({username: text})}
        />

        <AGRInput
          placeholder='Senha'
          secureTextEntry
          onChangeText={(text) => {
            return this.setState({ password: text });
          }}
        />

        <AGRButton
          onPress={this._onPressButton.bind(this)}
          text="Entrar"
        />
      </View>
    );
  }
}

export default LoginScreen;
