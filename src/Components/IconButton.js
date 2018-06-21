import React from 'react';
import {Text, Container, Content, Button,Icon} from 'native-base';
import {iconButton as styles} from './styles' ;

class IconButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button rounded light style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Icon type='MaterialIcons' style={styles.icon} name={this.props.Icon} />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default IconButton;
