import React from 'react';
import {TouchableHighlight, Alert, Text} from 'react-native';

const styles = {
  container: {
    backgroundColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
};

class AGRButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => this.props.onPress()}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default AGRButton;
