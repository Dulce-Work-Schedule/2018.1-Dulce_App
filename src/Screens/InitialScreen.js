import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import SmallLogo from '../Components/SmallLogo';
import {connect} from 'react-redux';
import {actionLogout} from '../Actions/currentUser';
import {NavigationActions} from 'react-navigation';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from 'react-native-side-menu';
import Menu from '../Components/SideMenu';

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
  container:{
    backgroundColor: '#FFF'
  }

};

export class InitialScreen extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: false,
      selectedItem: 'About'
    };
  }

  toggle() {
  this.setState({
    isOpen: !this.state.isOpen,
  });
}

updateMenuState(isOpen) {
  this.setState({ isOpen });
}

onMenuItemSelected = item =>
  this.setState({
    isOpen: false,
    selectedItem: item,
  });

  _onPressLogout() {
    this.props.removeUser();
    this.resetNavigation('login');
  }

  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: targetRoute})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (

      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
      <Icon.Button name='navicon' onPress={() => this.toggle()}></Icon.Button>
      <ScrollView style={styles.container}>
        <SmallLogo />
        <Container>
          <Content>
            <View style={styles.btn}>
              <Icon.Button name='edit' style={styles.text} backgroundColor='purple' onPress={() => this.props.navigation.navigate('edit')}>Editar perfil</Icon.Button></View>
            <View style={styles.btn}>
              <Icon.Button name='users' style={styles.text} backgroundColor='purple' onPress={() => this.props.navigation.navigate('list')}>Ver médicos</Icon.Button></View>
            <View style={styles.btn}>
              <Icon.Button name='user-plus' style={styles.text} backgroundColor='purple' onPress={() => this.props.navigation.navigate('newManager')}>Criar novos gestores</Icon.Button></View>
            <View style={styles.btn}>
              <Icon.Button name='user-o' style={styles.text} backgroundColor='purple' onPress={() => this.props.navigation.navigate('ProfileManager')}>Perfil gestor</Icon.Button></View>
            <View style={styles.btn}>
              <Icon.Button name='sign-out' style={styles.text} backgroundColor='purple' onPress={() => this._onPressLogout()}>Logout</Icon.Button></View>
          </Content>
        </Container>
      </ScrollView>

        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
        <SmallLogo/>
        </TouchableOpacity>
</SideMenu>
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
