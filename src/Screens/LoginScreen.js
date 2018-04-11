import React from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, TextInput, Image, Alert} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import BotaoTransparente from '../Components/BotaoTransparente';
import axios from 'axios';
import { actionLogin } from '../Actions/currentUser';

const logo = require('../../assets/img/logo.png');

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF'
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
      matricula: '',
      password: ''
    };
  }


  _onPressButton() {
    if (this.state.password === '' || this.state.matricula === '') {
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
      //this.login();
      token_falso = this.state.matricula + this.state.password;
      this.props.setCurrentUser(token_falso);
    }
  }

  login(){
    axios.post('http://localhost:3000/auth/users', {
      matricula: this.state.matricula,
      password: this.state.password
    })
      .then((response) => {
        this.props.setCurrentUser(response.data);
        return this.props.navigation.navigate('initial');
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
        <ScrollView>
        <Image source={logo} style={styles.logo} />
        <AGRInput
          autoCapitalize='none'
          placeholder='Matrícula'
          onChangeText={(text) => this.setState({matricula: text})}
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
        </ScrollView>
      </View>
    );
  }
}



const mapStateToProps = (state) => {
  return{
    currentUser:state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (value) =>{
      const currentUser = {
        token: value
      };
      return dispatch(setCurrentUser(currentUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
