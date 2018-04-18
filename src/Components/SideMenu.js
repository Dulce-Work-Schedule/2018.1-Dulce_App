import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import SmallLogo from './SmallLogo';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20
  },
  item: {
    backgroundColor: 'white',
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView>
      <SmallLogo />
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <Icon.Button
          name='edit'
          style={styles.text}
          backgroundColor='transparent'
          color='black'
          onPress={() => this.props.navigation.navigate('edit')}
        >
        Editar perfil</Icon.Button>

        <Icon.Button
          name='users'
          style={styles.text}
          backgroundColor='transparent'
          color='black'
          onPress={() => this.props.navigation.navigate('list')}
          >
          Ver médicos</Icon.Button>

          <Icon.Button
            name='user-plus'
            style={styles.text}
            backgroundColor='transparent'
            color='black'
            onPress={() => this.props.navigation.navigate('newManager')}
          >
            Criar novos gestores
          </Icon.Button>

          <Icon.Button
            name='user-o'
            style={styles.text}
            backgroundColor='transparent'
            color='black'
            onPress={() => this.props.navigation.navigate('ProfileManager')}
          >
            Perfil gestor</Icon.Button>
            
      </ScrollView>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
