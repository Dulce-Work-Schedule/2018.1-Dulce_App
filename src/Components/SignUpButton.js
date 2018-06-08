import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Button} from 'native-base';

const styles = {
  container: {
    height: 45,
    marginTop: 0,
    paddingHorizontal: 50,
    backgroundColor: '#5f4b8b',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 0,
    width: 175
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Raleway',
    alignItems: 'center'
  }
};

class SignUp extends React.Component {
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

export default SignUp;
