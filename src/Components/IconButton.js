import {IconButton as styles} from './styles' ;
import React from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

class IconButton extends React.Component {
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

export default IconButton;
