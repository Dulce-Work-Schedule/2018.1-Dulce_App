import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const styles = {
  container: {
    backgroundColor: '#FFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'grey',
    fontSize: 18
  }
};

class BotaoTransparente extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        style={styles.container}
        <Content>
          <Button transparent onPress={() => this.props.onPress()}>
            <Text>Light style={styles.text}>{this.props.text}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default BotaoTransparente;
