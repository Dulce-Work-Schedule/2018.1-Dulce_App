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
import { Container, Header, Content, Button, Icon, Text } from 'native-base';



const styles={
    text:{
      fontSize: 15,
      marginLeft: 30

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
      backgroundColor: 'purple',
      width: 300,
      height: 50,
      alignItems: 'center',
      marginTop: 30,
      paddingHorizontal: 50,
      alignSelf: 'center',
      marginBottom: 0
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

                    <Button style={styles.btn} iconLeft onPress={() => this.props.navigation.navigate('edit')}>
                      <Image source={require('../../assets/img/editprofile.png')} style = {styles.image}/>
                      <Text style={styles.text}>Editar Perfil</Text>
                    </Button>

                    <Button iconLeft style={styles.btn} onPress={() => this.props.navigation.navigate('list')}>
                      <Image source={require('../../assets/img/list.png')} style = {styles.image}/>
                      <Text style={styles.text}>Ver médicos</Text>
                    </Button>

                    <Button iconLeft style={styles.btn}  onPress={() => this.props.navigation.navigate('newManager')}>
                      <Image source={require('../../assets/img/newManager.png')} style = {styles.image}/>
                      <Text style={styles.text}>Criar novos gerentes</Text>
                    </Button>

                    <Button iconLeft style={styles.btn} onPress={() => this.props.navigation.navigate('EmployeeProfile')}>
                      <Image source={require('../../assets/img/employee.png')} style = {styles.image}/>
                      <Text style={styles.text}>Employee Profile</Text>
                    </Button>

                    <Button iconLeft style={styles.btn} onPress={() => this.props.navigation.navigate('ProfileManager')}>
                      <Image source={require('../../assets/img/profileManager.png')} style = {styles.image}/>
                      <Text style={styles.text}>Perfil gestor</Text>
                    </Button>

                    <Button iconLeft style={styles.btn} onPress={() => this._onPressLogout()}>
                      <Image source={require('../../assets/img/logout.png')} style = {styles.image}/>
                      <Text style={styles.text}>Logout</Text>
                    </Button>





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
