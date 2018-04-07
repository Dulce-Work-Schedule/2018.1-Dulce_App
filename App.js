import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import InitialScreen from './src/Screens/InitialScreen';
import MainNavigator from './src/Navigators/MainNavigator';

class App extends React.Component {

  render() {
    return(
      <MainNavigator />
    );
  }
}

export default App;
