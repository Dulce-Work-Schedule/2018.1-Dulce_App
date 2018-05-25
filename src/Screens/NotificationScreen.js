import React from 'react';
import {Text} from 'react-native';

class NotificationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <Text> Esta tela é a de notificações</Text>
    );
  }
}

export default NotificationScreen;
