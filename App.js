import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import InitialScreen from './src/Screens/InitialScreen';
import MainNavigator from './src/Navigators/MainNavigator';

class App extends React.Component {
  state = {
   isLoggedIn: false
 }
  render() {
    if (this.state.isLoggedIn)
      return <InitialScreen
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <LoginScreen
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />
  }
}

export default App;
