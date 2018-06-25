import LoginScreen from '../Screens/LoginScreen';
import NewUser from '../Screens/NewUser';
import InitialScreen from '../Screens/InitialScreen';
import ListProfile from '../Screens/ListProfile';
import NewProfile from '../Screens/NewProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  profile: {
    screen: ListProfile,
    navigationOptions: {
      header: null
    }
  },
  newProfile: {
    screen: NewProfile,
    navigationOptions: {
      header: null
    }
  },
  newUser: {
    screen: NewUser,
    navigationOptions: {
      header: null
    }
  },
  initial: {
    screen: InitialScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const LoginNavigator = StackNavigator(routes, config);

export default LoginNavigator;
