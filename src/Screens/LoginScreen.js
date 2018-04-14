import React from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, TextInput, Image, Alert} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import BotaoTransparente from '../Components/BotaoTransparente';
import axios from 'axios';
import { actionLogin } from '../Actions/currentUser';
import { NavigationActions } from 'react-navigation';

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

export class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registration: '',
      password: ''
    };
  }

  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: targetRoute }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  _onPressButton() {
    if (this.state.password === '' || this.state.registration === '') {
      Alert.alert(
        'Alguns campos ainda estão vazios',
        'Para entrar preencha corretamente os campos de matrícula e senha.'
      );

    } else {
      this.login();
    }
  }

  login(){
    axios.post('http://172.17.0.1:8080/user/login', {
      registration: this.state.registration,
      password: this.state.password
    })
      .then((response) => {
       this.props.setCurrentUser(response.data.token, response.data.id);
       this.props.navigation.navigate('list');
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Erro!', err.response.data.message);
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Image source={logo} style={styles.logo} />
        <AGRInput
          autoCapitalize='none'
          placeholder='Matricula'
          onChangeText={(text) => this.setState({registration: text})}
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
    setCurrentUser: (api_token, api_id) => {
      const currentUser = {
        token: api_token,
        id: api_id
      };
      return dispatch(actionLogin(currentUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
