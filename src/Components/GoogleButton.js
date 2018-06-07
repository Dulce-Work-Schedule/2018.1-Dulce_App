import React from 'react';
import {Text, Image} from 'react-native';
import { Container, Header, Content, Button, Icon } from 'native-base';

const styles = {
  container: {
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

class GoogleButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button style={styles.container} iconLeft light>
            <Image source={require('../../assets/img/google.png')} />
            <Text>Entrar com Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default GoogleButton;
