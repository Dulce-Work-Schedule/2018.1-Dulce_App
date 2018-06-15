import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Button,Icon} from 'native-base';

const styles = {
  container: {
    //backgroundColor: '#5f4b8b',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 0,
    width: 170,
    borderColor: '#5f4b8b'
  },
  text: {
    color: '#5f4b8b',
    fontSize: 20,
    fontFamily: 'Raleway',
    alignItems: 'center'
  }
};

class IconButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button iconLeft bordered primary style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Icon type='MaterialIcons' name={this.props.Icon} />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default IconButton;
