import React from 'react';
import {Text, Image} from 'react-native';
import {Container, Content, Button} from 'native-base';

const styles = {
  container: {
    height: 43,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 0,
    backgroundColor: '#FFF'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Raleway',
    paddingHorizontal: 50
  }
};

class GoogleButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button bordered style={styles.container} iconLeft light>
            <Image source={require('../../assets/img/google.png')} />
            <Text>  Entrar com Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default GoogleButton;
