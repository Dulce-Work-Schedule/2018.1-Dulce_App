import React from 'react';
import {Input, Item, Form, Label} from 'native-base';

const styles = {
  textInput: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    fontFamily: 'Lato'
  },
  container: {
    paddingHorizontal: 30
  },
  label: {
    fontFamily: 'Lato',
    marginTop: 5
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
