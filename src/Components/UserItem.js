import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const styles = {
  item: {
    height: 40,
    borderBottomWidth: 1,
    justifyContent: 'center'
  }
};

class UserItem extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.item}
      >
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default UserItem;
