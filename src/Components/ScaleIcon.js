import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';


class ScaleIcon extends React.Component{

const Logo = require('../..assets/img/CalendarIcon.png')

  render(){
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.item}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default ScaleIcon;
