import React from 'react';
import {Container} from 'native-base';
import {View, Text} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import AGRInput from './AGRInput';

const styles = {
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 10
  }
};

class InputValidate extends ValidationComponent {
  render() {
    return (
      <View>
        <AGRInput
        style={styles.input}
        value = {this.props.item}
        nameLabel={this.props.label}
        editable = {this.props.editable}
        onChangeText={() => this.props.onChange()}/>
        {this.isFieldInError(this.props.item_string) && this.getErrorsInField(this.props.item_string).map(
          errorMessage => <Text style={styles.error}>{errorMessage}</Text>
        )}
      </View>
    );
  }
}

export default InputValidate;
