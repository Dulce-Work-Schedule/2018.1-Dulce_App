import React from 'react';
import {TouchableHighlight,Text,View} from 'react-native';

const styles = {
  container: {
    backgroundColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 50
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  view: {
    paddingHorizontal: 30
  }
};

class AGRButton extends React.Component {
  render() {
    return (
      <View style={styles.view}>
      <TouchableHighlight
        style={styles.container}
        onPress={() => this.props.onPress()}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

export default AGRButton;
