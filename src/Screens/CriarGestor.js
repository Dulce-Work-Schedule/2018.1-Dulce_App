import React from 'react';
import {Text, View, TextInput, Image, Alert, ScrollView } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
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
  },
  error:{
    color: 'red'
  }
};

export default class CriarGestor extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      matricula: '',
      hospital: '',
      setor: '',
      senha: '',
      confirmaSenha: '',
      error: false

    }
  }

  _onPressButton(){
    if(this.validate({
        nome: {minlength:3, required: true},
        matricula: {numbers: true, required: true},
        hospital: {required: true},
        setor: {required: true},
        senha: {minlength:4, maxlength:8, required: true},
        confirmaSenha: {minlength:4, maxlength:8, required: true}
      })){
        //Metodo para mandar para a API estará aqui
        Alert.alert(
          'nome: ' + this.state.nome +
          '\nMatricula: ' + this.state.matricula +
          '\nHospital: ' + this.state.hospital +
          '\nSetor: ' + this.state.setor +
          '\nSenha: ' + this.state.senha +
          '\nConfirmação de Senha: ' + this.state.confirmaSenha
         )
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}  style={styles.logo} />
        <ScrollView>
        <TextInput
          ref="nome"
          style={styles.input}
          placeholder="Nome Completo"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            nome: text})}
          />
          {this.isFieldInError('nome') && this.getErrorsInField('nome').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <TextInput
          ref="matricula"
          style={styles.input}
          placeholder="Matrícula"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            matricula: text})}
        />
        {this.isFieldInError('matricula') && this.getErrorsInField('matricula').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput
          ref="hospital"
          style={styles.input}
          placeholder="Hospital"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            hospital: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput
          style={styles.input}
          placeholder="Setor"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({
            setor: text})}
        />

        <TextInput
          ref="senha"
          style={styles.input}
          placeholder="Senha"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(text) => this.setState({
            senha: text})}
        />
        {this.isFieldInError('senha') && this.getErrorsInField('senha').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput
          ref="confirmaSenha"
          style={styles.input}
          placeholder="Confirme sua senha"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(text) => this.setState({
            confirmaSenha: text})}
        />
        {this.isFieldInError('confirmaSenha') && this.getErrorsInField('confirmaSenha').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRButton
          style={styles.button}
          text= 'Testar'
          onPress={() => this._onPressButton()}
        />
        </ScrollView>
      </View>
    );
  }
}
