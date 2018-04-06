import React from 'react';
import {View, TextInput, Image, Alert} from 'react-native';
import AGRButton from '../Components/AGRButton';
import BotaoTransparente from '../Components/BotaoTransparente';

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
    width: '100%',
    alignSelf: 'center',
    marginBottom: 50
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
      matricula: '',
      senha: ''
    };
  }

  _onPressButton() {
    if (this.state.senha === '' || this.state.matricula === '') {
      Alert.alert(
        'Alguns campos ainda estão vazios',
        'Para entrar preencha corretamente os campos de matrícula e senha.'
      );
    } else if (this.state.senha.length < 6) {
      Alert.alert(
        'Sua senha é muito curta',
        'A senha deve ter no minimo 6 caracteres.'
      );
    } else {
      this.props.onLoginPress();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder='Matricula'
          underlineColorAndroid='transparent'

          onChangeText={(text) => this.setState({matricula: text})}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          underlineColorAndroid='transparent'
          secureTextEntry

          onChangeText={(text) => this.setState({senha: text})}
        />
        <AGRButton
          onPress={this._onPressButton.bind(this)}
          text='Entrar'
        />
      </View>
    );
  }
}

export default LoginScreen;
