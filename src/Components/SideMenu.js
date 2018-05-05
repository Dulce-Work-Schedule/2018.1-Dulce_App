import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <View>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Doctors')}>
              Ver Medicos
            </Text>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Profile')}>
              Meu Perfil
            </Text>
          </View>

        </ScrollView>
        <View style={styles.footerContainer} onPress={this.navigateToScreen('Logout')}>
          <Text>Logout</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
