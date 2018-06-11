import React from 'react';
import {connect} from 'react-redux';
import {Image, Alert ,Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import GoogleButton from '../Components/GoogleButton';
import axios from 'axios';
import {actionLogin} from '../Actions/currentUser';
import {NavigationActions} from 'react-navigation';
import {Container ,Button} from 'native-base';

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
    alignSelf: 'center'
  },
  text: {
    fontSize: 15,
    color: '#5f4b8b'
  },
  buttonRegister: {
    alignSelf: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 140,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    marginTop: 20
  }
};

export class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registration: '',
      password: ''
    };
    this._onPressButton = this._onPressButton.bind(this);
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

    if (this.state.password === '' || this.state.registration === '') {
      Alert.alert(
        'Alguns campos ainda estão vazios',
        'Para entrar preencha corretamente os campos de matrícula e senha.'
      );

    } else {
      this.login();
    }
  }

  login() {
    //const url = 'http://ec2-52-67-139-45.sa-east-1.compute.amazonaws.com/api/userManager/login';
    const url = 'http://172.18.0.1:8086/api/userManager/login';
    axios.post(url, {
      registration: this.state.registration,
      password: this.state.password
    })
      .then((response) => {
        if (!response.data.success) {
          throw new Error('error');
        }
        this.props.setCurrentUser(response.data.token, response.data.user);
        this.resetNavigation('initial');
      })
      .catch((err) => {
        Alert.alert('Erro!', err.response.data.message);
      });
  }

  register() {
    this.props.navigation.navigate('newUser');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <AGRInput
          autoCapitalize='none'
          nameLabel='Email'
          onChangeText={(registration) => this.setState({registration})}
        />

        <AGRInput
          nameLabel='Senha'
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <AGRButton
          onPress={this._onPressButton}
          text='Entrar'
        />
        <GoogleButton/>

        <Button transparent style={styles.buttonRegister} onPress = {() => this.register()}>
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
        name: api_user.name,
        registration: api_user.registration,
        sector: api_user.sector,
        hospital: api_user.hospital
      };
      return dispatch(actionLogin(currentUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
