import React from 'react';
import { View, TextInput, Image, Alert } from 'react-native';
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

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      matricula: '',
      hospital: '',
      setor: '',
      senha: '',
      confirmaSenha: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}  style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            nome: text})}
          />
          <TextInput
          style={styles.input}
          placeholder="Matrícula"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            matricula: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Hospital"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            hospital: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Setor"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            setor: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(text) => this.setState({
            Senha: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(text) => this.setState({
            confirmaSenha: text})}
        />
        <AGRButton
          style={styles.button}
          text= 'Testar'
          onPress={() => Alert.alert(
            'nome: ' + this.state.nome +
            '\nmatricula: ' + this.state.matricula +
            '\nhospital: ' + this.state.hospital


           )
          }
        />
      </View>
    );
  }
}

export default CriarGestor;
