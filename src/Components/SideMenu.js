import PropTypes from 'prop-types';
import React from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const purple = '#5f4b8b';

const styles = {
  header: {
    flexDirection: 'column',
    paddingTop: 45,
    paddingLeft: 16,
    height: 170,
    backgroundColor: '#5f4b8b'
  },
  headerLogo: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  subTitle: {
    height: 56,
    paddingTop: 8
  },
  drawerTitle: {
    color: '#fff',
    fontFamily: 'Poiret One',
    fontWeight: '500',
    fontSize: 21
  },
  drawerEmail: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14
  },
  container: {
    flex: 1
  },
  navItemStyle: {
    padding: 10,
    color: '#fff'
  },
  route: {
    paddingVertical: 7,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  footerContainer: {
    padding: 20,
    backgroundColor: purple,
    flexDirection: 'row',
    alignItems: 'center'
  },
  routesContainer: {
    marginTop: 20
  }
};

export default class SideMenu extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  renderRoute(route, iconName) {
    return (
      <View style={styles.route}>
        <Icon name={iconName} size={25} style={{paddingHorizontal: 15}} color='#fff' />
        <Text style={styles.navItemStyle} onPress={this.navigateToScreen(route)}>
          {route}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{backgroundColor: purple}}>
          <View style={styles.header}>
            <View style={styles.headerLogo}>
            <Image
              style={{width: 65, height: 65}}
              source={require('../../assets/img/dulceHeader.png')}
            />
            </View>
            <View style={styles.subTitle}>
              <Text style={styles.drawerTitle}> dulce</Text>
              <Text style={styles.drawerEmail}> user.dulce@gmail.com</Text>
            </View>
          </View>
          <View style={styles.routesContainer}>
            {this.renderRoute('Ver Escala', 'md-calendar')}
            {this.renderRoute('Notificações', 'md-notifications')}
            {this.renderRoute('Meu Perfil atual', 'md-person')}
            {this.renderRoute('Todos os perfis', 'md-list')}
            {this.renderRoute('Solicitar Férias', 'md-plane')}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Icon name='md-exit' size={30} color='#fff' style={{paddingHorizontal: 15}} />
          <Text onPress={this.navigateToScreen('Logout')} style={{color: '#fff'}}>Logout</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
