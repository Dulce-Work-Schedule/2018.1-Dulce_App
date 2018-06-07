import React from 'react';
import {Input, Item, Form, Label} from 'native-base';

const styles = {
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Lato'
  },
  container: {
    paddingHorizontal: 30
  },
  label: {
    fontFamily: 'Lato'
  }
};

class AGRInput extends React.Component {
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label style={styles.label}>{this.props.nameLabel}</Label>
          <Input style={styles.textInput} underlineColorAndroid='transparent'
            {...this.props} />
        </Item>
      </Form>
    );
  }
}

export default AGRInput;
