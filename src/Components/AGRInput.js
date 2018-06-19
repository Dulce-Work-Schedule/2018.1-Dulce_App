import {agrInput as styles} from '../styles' ;
import React from 'react';
import {Input, Item, Form, Label} from 'native-base';

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
