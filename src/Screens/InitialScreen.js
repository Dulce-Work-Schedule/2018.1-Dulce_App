import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
  Text
} from 'react-native';
import SmallLogo from '../Components/SmallLogo';
import {connect} from 'react-redux';
import {actionLogout} from '../Actions/currentUser';
import {NavigationActions} from 'react-navigation';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from 'react-native-side-menu';
import Router from '../Components/routes';

const styles = {
  text: {
    marginLeft: 25
  },
  lastButton: {
    marginBottom: 150
  },
  image: {
    height: 30,
    width: 30,
    paddingLeft: 5
  },
  btn: {
    marginBottom: 20,
    paddingHorizontal: 48
  },
  container: {
    backgroundColor: '#FFF'
  }

};

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
