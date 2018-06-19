import React from 'react';
import {scaleIcon as styles} from '../styles' ;
import {Image, TouchableHighlight} from 'react-native';

class ScaleIcon extends React.Component {

  render() {
    return (
      <TouchableHighlight onPress = {() => this.props.onPress()} style = {styles.container}>
        <Image source={require('../../assets/img/calendarIcon.png')} style = {styles.icon}/>
      </TouchableHighlight>
    );
  }
}

export default ScaleIcon;
