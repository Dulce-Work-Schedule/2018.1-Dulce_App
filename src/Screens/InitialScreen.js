import React from 'react';
import {connect} from 'react-redux';
import {actionLogout} from '../Actions/currentUser';
import Router from '../Components/routes';

class InitialScreen extends React.Component {
  render() {
    return (
      <Router />
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
