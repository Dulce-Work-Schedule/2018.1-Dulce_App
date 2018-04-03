import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const styles = {
  container: {
    backgroundColor: '#FFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'grey',
    fontSize: 18
  }
};

class BotaoTransparente extends React.Component {
  constructor(props) {
    super(props);
  }
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

export default BotaoTransparente;
