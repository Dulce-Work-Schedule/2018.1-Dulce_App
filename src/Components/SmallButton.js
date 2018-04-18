import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const styles = {
  container: {
    backgroundColor: '#FFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 18,
    color: 'black'
  }
};

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
