import React from 'react';
import {connect} from 'react-redux';
import {View, ScrollView, Image, Alert} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import axios from 'axios';
import {actionLogin} from '../Actions/currentUser';
import {NavigationActions} from 'react-navigation';

const logo = require('../../assets/img/DulceLogoFull.png');

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
    fontSize: 36,
    color: '#039200'

  },
  logo: {
    alignSelf: 'center',
    height: 200,
    resizeMode: 'contain',
    backgroundColor: 'transparent'
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
    axios.post('http://192.168.0.17:8086/api/userManager/login', {
      registration: this.state.registration,
      password: this.state.password
    })
      .then((response) => {
        if (!response.data.success) {
          throw {response}
        }
        this.props.setCurrentUser(response.data.token, response.data.user);
        this.resetNavigation('initial');
      })
      .catch((err) => {
        Alert.alert('Erro!', err.response.data.message);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <AGRInput
            autoCapitalize='none'
            nameLabel ='Matrícula'
            onChangeText={(registration) => this.setState({registration})}
          />

          <AGRInput
            nameLabel ='Senha'
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
          />

          <AGRButton
            onPress={this._onPressButton.bind(this)}
            text='Entrar'
          />
        </View>
      </ScrollView>
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
