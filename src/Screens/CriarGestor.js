import React from 'react';
import { View, TextInput, Image } from 'react-native';
import AGRButton from '../Components/AGRButton';


const logo = require('../../assets/img/logo.png');

const styles = {
  logo: {
    alignSelf: 'center',
    marginBottom: 20
  },
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
    marginBottom: 20,
  },
  button: {
    marginTop : 30
  }
};

class CriarGestor extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Image source={logo}  style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Hospital"
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Setor"
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        underlineColorAndroid="transparent"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        underlineColorAndroid="transparent"
        secureTextEntry
      />
      <AGRButton
        style={styles.button}
        text="Entrar"
        onPress={() => this.props.navigation.navigate('login')}
      />
      </View>
    );
  }
}

export default CriarGestor;
