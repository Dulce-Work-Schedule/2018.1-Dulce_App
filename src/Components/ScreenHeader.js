import React from 'react';
import {Header, Body, Title} from 'native-base';

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
          <Body>
            <Title style={styles.text} > {this.props.title} </Title>
          </Body>
        </Header>
    );
  }
}

export default ScreenHeader;
