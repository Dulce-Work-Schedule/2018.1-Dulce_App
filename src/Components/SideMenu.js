import PropTypes from 'prop-types';
import React from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {sideMenu as styles} from './styles' ;
import {purple_dulce} from '../styles';
import store from '../Reducers/store';

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

  renderDrawerHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image
            style={{width: 65, height: 65}}
            source={require('../../assets/img/dulceHeader.png')}
          />
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.drawerTitle}>{store.getState().currentUser.firstName}</Text>
          <Text style={styles.drawerEmail}>{store.getState().currentUser.email}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.container}>
          <ScrollView style={{backgroundColor: purple_dulce}}>
            {this.renderDrawerHeader()}
            <View style={styles.routesContainer}>
              {this.renderRoute('Ver Escala', 'md-calendar')}
              {this.renderRoute('Notificações', 'md-notifications')}
              {this.renderRoute('Meu Perfil atual', 'md-person')}
              {this.renderRoute('Todos os perfis', 'md-list')}
              {this.renderRoute('Solicitar Férias', 'md-plane')}
              {this.renderRoute('Solicitar Abono de Faltas', 'md-paper')}
            </View>
          </ScrollView>
          <View style={styles.footerContainer}>
            <Icon name='md-exit' size={30} color='#fff' style={{paddingHorizontal: 15}} />
            <Text onPress={this.navigateToScreen('Logout')} style={{color: '#fff'}}>Logout</Text>
          </View>
        </View>
        <View style={{flex: 0.35, backgroundColor: '#fd7d01', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{backgroundColor: '#f1f1f1', alignItems: 'center', margin: 1, borderRadius: 5, width: 7.5, height: 40}} />
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
