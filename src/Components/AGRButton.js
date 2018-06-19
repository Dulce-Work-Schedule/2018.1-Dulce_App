import {agrButton as styles} from '../styles' ;
import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Button} from 'native-base';

class AGRButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button rounded style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default AGRButton;
