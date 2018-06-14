import React from 'react';
import {Header, Left, Body, Button, Icon, Title} from 'native-base';
import {StatusBar} from 'react-native';

const styles = {
  header: {
    backgroundColor: '#5f4b8b'
  },
  text: {
    fontFamily: 'Raleway'
  }
};

class ScreenHeader extends React.Component {
  render() {
    return (
        <Header style={styles.header}>
        <StatusBar
            backgroundColor='#5f4b79'
        />
          <Left style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button transparent>
            <Icon name={this.props.icon} />
            </Button>
            <Title style={styles.text} > {this.props.title} </Title>
            </Left>
          <Body />
        </Header>
    );
  }
}

export default ScreenHeader;
