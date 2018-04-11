import React from 'react';
import { TextInput, View } from 'react-native';

const styles = {
  textInput: {
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30
  },
  container: {
    paddingHorizontal: 30
  }
}

class AGRInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        {...this.props}
      />
      </View>
    );
  }
}

export default AGRInput;
