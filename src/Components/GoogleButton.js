import {googleButton as styles} from '../styles' ;
import React from 'react';
import {Text, Image} from 'react-native';
import {Container, Content, Button} from 'native-base';

class GoogleButton extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Button
            rounded bordered iconLeft
            style={styles.container}
            onPress={() => this.props.onPress()}
          >
            <Image style = {styles.img} source={require('../../assets/img/google.png')} />
            <Text style = {styles.text}> Entrar com Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default GoogleButton;
