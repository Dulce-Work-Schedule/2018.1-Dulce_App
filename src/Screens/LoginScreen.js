import React from 'react';
import { View, TextInput, Image } from 'react-native';
import AGRButton from '../Components/AGRButton';
import BotaoTransparente from '../Components/BotaoTransparente';

const logo = require('../../assets/img/logo.png');

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 50,
  },
  input: {
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 50,
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

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}  style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        <AGRButton
          text="Entrar"
          onPress={() => this.props.navigation.navigate('ProfileManager')}
        />
      </View>
    );
  }
}

export default LoginScreen;
