import {smallButton as styles} from '../styles' ;
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

class SmallButton extends React.Component {

  render() {

    return (

      <TouchableHighlight style={styles.container}

        onPress = {() => this.props.onPress()}

      >

        <Text style = {styles.text}>{this.props.text}</Text>

      </TouchableHighlight>
    );
  }
}

export default SmallButton;
