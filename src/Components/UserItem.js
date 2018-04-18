import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const styles = {
  item: {
    height: 60,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 25
  }
};

class UserItem extends React.Component {
  render() {
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

export default UserItem;
