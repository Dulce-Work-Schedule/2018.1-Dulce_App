import React from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
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
          <Button rounded
            style={this.props.style ? this.props.style : styles.container}
            onPress={() => this.props.onPress()}>
            {this.props.icon ? <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={this.props.icon} size={25} style={{paddingHorizontal: 15}} color='#fff' />
              <Text style={styles.text}>{this.props.text}</Text>
              </View>
              : <Text style={styles.text}>{this.props.text}</Text>
            }
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SignUp;
