import {smallLogo as styles} from '../styles' ;
import React from 'react';
import {View, Image} from 'react-native';
const logo = require('../../assets/img/logo.png');

class SmallLogo extends React.Component {
  render() {
    return (
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
    );
  }
}

export default SmallLogo;
