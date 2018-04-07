import React from 'react';
import { TextInput } from 'react-native';

const styles = {
  textInput: {
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30
  }
}

class AGRInput extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

export default AGRInput;
