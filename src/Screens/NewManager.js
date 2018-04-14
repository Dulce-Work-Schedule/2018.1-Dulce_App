import React from 'react';
import {Text, View, TextInput, Image, Alert, ScrollView } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import AGRButton from '../Components/AGRButton';
import SmallLogo from '../Components/SmallLogo';
import AGRInput from '../Components/AGRInput';
import axios from 'axios';

const logo = require('../../assets/img/logo.png');

const styles = {
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 200,
    height: 100,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    //paddingHorizontal: 50

  },
  input: {
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20
  },
  button: {
    marginTop: 30
  },
  error: {
    color: 'red',
    alignSelf: 'center'
  }
};

export default class NewManager extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      registration: '',
      hospital: '',
      sector: '',
      password: '',
      confirmepassword: ''
    };
  }

  _onPressButton() {
    if (this.validate({
      name: {required: true},
      hospital: {required: true},
      sector: {required: true},
      password: {minlength: 4, maxlength: 8, required: true},
      confirmepassword: {required: true}
    }) && (this.state.confirmepassword == this.state.password)) {
      //Metodo para mandar para a API estará aqui

      this.newManager();

     }
    };


newManager(){

  axios.post('http://172.17.0.1:8080/user/add', {
      registration: this.state.registration,
      password: this.state.password,
      name: this.state.name,
      hospital: this.state.hospital,
      sector: this.state.sector,
      manager: true
    })
      .then((response) => {
       const token = response.data.token;
       this.props.navigation.navigate('login');
      })
}



  confirmepasswordErrado() {
    if (this.state.confirmepassword != this.state.password) {
      return true;
    } else {
      return false;
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <SmallLogo/>
        <ScrollView>
          <TextInput ref='name' style={styles.input} placeholder='name Completo' underlineColorAndroid='transparent' onChangeText={(text) => this.setState({name: text})} />
          {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>)}
          <TextInput ref='registration' style={styles.input} placeholder='Matrícula' underlineColorAndroid='transparent' onChangeText={(text) => this.setState({registration: text})} />
          {this.isFieldInError('registration') && this.getErrorsInField('registration').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>)}
          <TextInput ref='hospital' style={styles.input} placeholder='Hospital' underlineColorAndroid='transparent' onChangeText={(text) => this.setState({hospital: text})} />
          {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <TextInput ref='sector' style={styles.input} placeholder='sector' underlineColorAndroid='transparent' onChangeText={(text) => this.setState({sector: text})} />
          {this.isFieldInError('sector') && this.getErrorsInField('sector').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <TextInput ref='password' style={styles.input} placeholder='password' underlineColorAndroid='transparent' secureTextEntry onChangeText={(text) => this.setState({password: text})} />
          {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          {this.isFieldInError('confirmepassword') && this.getErrorsInField('confirmepassword').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <TextInput ref='confirmepassword' style={styles.input}
            placeholder='Confirme sua password'
            underlineColorAndroid='transparent'
            secureTextEntry
            onChangeText={(text) => this.setState({confirmepassword: text})} />
          <AGRButton style={styles.button} text='Criar' onPress={() => this._onPressButton()} />
        </ScrollView>
      </View> );}
}
