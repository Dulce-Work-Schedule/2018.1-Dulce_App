import React from 'react';
import {Text} from 'react-native';
import {Button} from 'native-base';

class ValidateButton extends React.Component {
  render() {
    return (
      <Button transparent style={{padding: 8}}
        onPress={() => this.props.onPress ? this.props.onPress() : {}}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </Button>
    );
  }
}
export default ValidateButton;
