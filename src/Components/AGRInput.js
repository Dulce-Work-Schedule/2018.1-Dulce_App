import React from 'react';
import {Input, Item, Form, Label} from 'native-base';

const styles = {
  textInput: {
    height: 40,
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
};

class AGRInput extends React.Component {
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>{this.props.nameLabel}</Label>
          <Input style={styles.textInput} underlineColorAndroid='transparent'
            {...this.props} />
        </Item>
      </Form>
    );
  }
}

export default AGRInput;
