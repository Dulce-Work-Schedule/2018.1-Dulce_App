import React, {Component} from 'react';
import {Text,
         View,
         ScrollView,
         StyleSheet,
         TouchableHighlight,
         Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container,Content,Button} from 'native-base';
import SignUpButton from '../Components/SignUpButton';

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  item: {
    borderBottomWidth: 1
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const Form = t.form.Form;

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.Service = t.struct({
      Nome: t.String,
      Email: t.String,
      senha: t.String,
      confirmarSenha: t.String
    });

    this.options = {
      fields: {
        Nome: {
          error: 'Campo obrigatório'
        },
        Email: {
          error: 'Campo obrigatório'
        },
        senha: {
          error: 'Campo obrigatório'
        },
        confirmarSenha: {
          error: 'Campo obrigatório'
        }
      },
      stylesheet: formStyles
    };
  }

  _onPressButton() {

  }

  render() {
    return (
      <ScrollView >
          <ScreenHeader title = 'Criar nova conta' />
        <View style={styles.container}>
          <Form
            ref='form'
            type={this.Service}
            options={this.options}
          />
          </View>
          <View style={{flex:1}}>
            <SignUpButton
            text = 'Cadastrar'
            />
            </View>
      </ScrollView>
    );
  }
}

const formStyles = {
  ...Form.stylesheet,
  error: {
    color: 'red',
    fontSize: 18,
    marginBottom: 7,
    fontWeight: '600'
  }
};

export default NewUser;
