import React from 'react';
import {Header, Left, Body, Button, Icon, Title} from 'native-base';
import {screenHeader as styles} from './styles' ;
import {StatusBar, View} from 'react-native';

class ScreenHeader extends React.Component {
  render() {
    return (
      <Header style={styles.header}>
        <StatusBar
          backgroundColor='#5f4b79'
        />
        {
          this.props.goBack
          ? <Left>
            <Button transparent onPress={() => this.props.goBack()}>
            <Icon name='arrow-back' />
            </Button>
          </Left>
          : <View/>
        }
        <Body style={ this.props.goBack ? {} : {alignItems: 'center'}} >
          <Title style={styles.text} > {this.props.title} </Title>
        </Body>
      </Header>
    );
  }
}

export default ScreenHeader;
