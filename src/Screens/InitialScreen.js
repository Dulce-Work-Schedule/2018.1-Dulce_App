import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallLogo from '../Components/SmallLogo';
import { connect } from 'react-redux';
import { actionLogout } from '../Actions/currentUser';
import store from '../Reducers/store';
import { NavigationActions } from 'react-navigation';



const styles={
    text:{
      fontSize: 27
    },
    lastButton:{
      marginBottom: 150
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
                <Text style={styles.text}> Welcome !! </Text>
                <View/>
                <AGRButton onPress={() => this.props.navigation.navigate('profile')}
                  text="Perfil"/>
                <AGRButton onPress={() => this.props.navigation.navigate('edit')}
                  text="Editar Perfil"/>
                <AGRButton onPress={() => this.props.navigation.navigate('list')}
                  text="Ver médicos"/>
                <AGRButton onPress={() => this.props.navigation.navigate('newManager')}
                  text="Criar novos gerentes"/>
                <AGRButton onPress={() => this.props.navigation.navigate('EmployeeProfile')}
                  text="Employee Profile"/>
                <AGRButton onPress={() => this.props.navigation.navigate('ProfileManager')}
                  text="Perfil gestor"/>
                <AGRButton style={styles.lastButton}
                  onPress={() => this._onPressLogout()}
                  text="Logout"/>
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
