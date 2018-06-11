import PropTypes from 'prop-types';
import React from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
  header: {
    flexDirection: 'column',
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
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
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
};

export default class SideMenu extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
          <View>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Ver Escala')}>
                Ver Escala
              </Text>
            </View>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Notificações')}>
                Notificações
              </Text>
            </View>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Meu Perfil')}>
                Meu Perfil
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text onPress={this.navigateToScreen('Logout')}>Logout</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
