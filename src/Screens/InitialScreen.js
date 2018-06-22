import React from 'react';
import {connect} from 'react-redux';
import {actionLogout} from '../Actions/currentUser';
import Router from '../Components/routes';
import store from '../Reducers/store';
import LoginNavigator from '../Navigators/LoginNavigator';
import {Provider} from 'react-redux';

class InitialScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
      {
        store.getState().currentUser.logged_in ? <Router />
        : <LoginNavigator />
      }
      </Provider>
    );
  }
}

const mapStateToProps = () => {
  return {
    currentUser: {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => {
      return dispatch(actionLogout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
