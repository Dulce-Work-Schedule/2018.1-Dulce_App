import React from 'react';
import LoginNavigator from '../Navigators/LoginNavigator';
import {Provider} from 'react-redux';
import store from '../Reducers/store';

class Logout extends React.Component{

  render() {
    return (
      <Provider store={store}>
        <LoginNavigator />
      </Provider>
    );
  }
}

export default Logout;
