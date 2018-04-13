import React from 'react';
import {View, Image} from 'react-native';
const logo = require('../../assets/img/logo.png');

const styles = {
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 200,
    height: 100,
    resizeMode: 'contain'
  }
};

class SmallLogo extends React.Component{
  render(){
    return(
      <View>
        <Image source={logo}  style={styles.logo} />
      </View>
    )
  }
}

export default SmallLogo;
