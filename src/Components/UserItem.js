import {userItem as styles} from './styles' ;
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

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
