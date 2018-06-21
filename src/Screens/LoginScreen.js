import React from 'react';
import {connect} from 'react-redux';
import {Image, Alert ,Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import GoogleButton from '../Components/GoogleButton';
import axios from 'axios';
import {actionLogin} from '../Actions/currentUser';
import {NavigationActions} from 'react-navigation';
import {Container ,Button, Toast,Content} from 'native-base';
import {StatusBar} from 'react-native';
import {loginScreen as styles} from './styles' ;

const logo = require('../../assets/img/logo.png');
export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showToast: false
    };
    this._onPressButton = this._onPressButton.bind(this);
  }

  alert() {
    Toast.show({
      text: 'Funcionalidade não disponivel'});
  }
  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: targetRoute})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  _onPressButton() {

    if (this.state.password === '' || this.state.email === '') {
      Alert.alert(
        'Alguns campos ainda estão vazios',
        'Para entrar preencha corretamente os campos de matrícula e senha.'
      );

    } else {
      this.login();
    }
  }

  login() {
    const url = 'http://52.67.4.137:8083/api/user/login';
    axios.post(url, {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        if (!response.data.success) {
          var error = '';
          if (response.data.email_valid_error) {
            error += response.data.email_valid_error;
          }
          if (response.data.message) {
            error += response.data.message;
          }
          Alert.alert('Erro!', error);
        } else {
          this.props.setCurrentUser(response.data.token, response.data.user);
          this.resetNavigation('initial');
        }
      });
  }

  register() {
    this.props.navigation.navigate('newUser');
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor='#5f4b79' />
        <Image source={logo} style={styles.logo} />
        <AGRInput
          autoCapitalize='none'
          nameLabel='Email'
          onChangeText={(email) => this.setState({email})}/>
        <AGRInput
          nameLabel='Senha'
          secureTextEntry
          onChangeText={(password) => this.setState({password})}/>
        <AGRButton
          onPress={this._onPressButton}
          text='Entrar'/>
        <Content padder>
          <GoogleButton onPress={() => this.alert()}/>
        </Content>
        <Button transparent style={styles.buttonRegister} testID='register' onPress = {() => this.register()}>
          <Text style={styles.text}>Não tem uma conta? Cadastre-se!</Text>
        </Button>
      </Container>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (api_token, api_user) => {
      const currentUser = {
        token: api_token,
        id: api_user.id,
        firstName: api_user.firstName,
        lastName: api_user.lastName,
        email: api_user.email
      };
      return dispatch(actionLogin(currentUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
