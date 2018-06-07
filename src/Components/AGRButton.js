import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Button} from 'native-base';

const styles = {
  container: {
    backgroundColor: '#5f4b8b',
    height: 45,
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 0,
    width: 140
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Raleway',
    alignItems: 'center'
  }
};

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
