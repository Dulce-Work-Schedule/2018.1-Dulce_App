import {agrButton as styles} from './styles' ;
import React from 'react';
import {Text} from 'react-native';
import {Content, Button} from 'native-base';

class AGRButton extends React.Component {
  render() {
    return (
        <Content>
          <Button rounded style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
          </Button>
        </Content>
    );
  }
}

export default AGRButton;
