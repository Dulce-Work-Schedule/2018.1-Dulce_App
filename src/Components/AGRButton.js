import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Button} from 'native-base';

const styles = {
  container: {
    backgroundColor: '#5f4b8b',
    height: 50,
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 0
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Raleway'
  }
};

class AGRButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button block style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default AGRButton;
