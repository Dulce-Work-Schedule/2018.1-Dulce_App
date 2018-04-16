import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Image
} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallLogo from '../Components/SmallLogo';
import { connect } from 'react-redux';
import { actionLogout } from '../Actions/currentUser';
import store from '../Reducers/store';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles={
    text:{
      marginLeft: 25
    },
    lastButton:{
      marginBottom: 150
    },
    image:{
      height: 30,
      width: 30,
      paddingLeft: 5
    },
    btn:{
      marginBottom: 20,
      paddingHorizontal: 48
    }

};



class InitialScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      logged: false
    }
  }

  _onPressLogout() {
    this.props.removeUser();
    this.resetNavigation('login')
  }

  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: targetRoute }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <ScrollView>
        <SmallLogo />
        <Container>
          <Content>
            <View style={styles.btn}>
            <Icon.Button name="edit" style={styles.text} backgroundColor="purple" onPress={() => this.props.navigation.navigate('edit')}>Editar perfil</Icon.Button></View>
            <View style={styles.btn}>
            <Icon.Button name="users" style={styles.text} backgroundColor="purple" onPress={() => this.props.navigation.navigate('list')}>Ver médicos</Icon.Button></View>
            <View style={styles.btn}>
            <Icon.Button name="user-plus" style={styles.text} backgroundColor="purple" onPress={() => this.props.navigation.navigate('newManager')}>Criar novos gestores</Icon.Button></View>
            <View style={styles.btn}>
            <Icon.Button name="user-o" style={styles.text} backgroundColor="purple" onPress={() => this.props.navigation.navigate('ProfileManager')}>Perfil gestor</Icon.Button></View>
            <View style={styles.btn}>
            <Icon.Button name="sign-out" style={styles.text} backgroundColor="purple" onPress={() => this._onPressLogout()}>Logout</Icon.Button></View>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser:{}
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
