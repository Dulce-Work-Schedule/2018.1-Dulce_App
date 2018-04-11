import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import InitialScreen from './src/Screens/InitialScreen';
import MainNavigator from './src/Navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Reducers/store';

store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
