import React from 'react';
import {Header, Body, Title} from 'native-base';
import {screenHeader as styles} from '../styles' ;
import {StatusBar} from 'react-native';

class ScreenHeader extends React.Component {
  render() {
    return (
      <Header style={styles.header}>
        <StatusBar
          backgroundColor='#5f4b79'
        />
        <Body>
          <Title style={styles.text} > {this.props.title} </Title>
        </Body>
      </Header>
    );
  }
}

export default ScreenHeader;
