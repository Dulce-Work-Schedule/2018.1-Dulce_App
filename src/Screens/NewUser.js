import React, {Component} from 'react';
import {Text,View,ScrollView,StyleSheet,TouchableHighlight,Alert
} from 'react-native';
import t from 'tcomb-form-native';

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
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
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  item: {
    borderBottomWidth: 1,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


const Form = t.form.Form;

class ServiceForm extends Component {
  constructor(props) {
    super(props);

    this.Service = t.struct({
      nomeDoServiço: t.String,
      descriçãoDoServiço: t.String,
      estado: t.String,
      cidade: t.String,
      bairro: t.String
    });

    this.options = {
      fields: {
        estado: {
          error: 'Digite um estado'
        },
        cidade: {
          error: 'Digite uma cidade'
        },
        bairro: {
          error: 'Digite um bairro'
        },
        nomeDoServiço: {
          error: 'Digite um nome do serviço'
        },
        descriçãoDoServiço: {
          error: 'Digite uma descrição do serviço'
        }
      },
      stylesheet: formStyles
    };
  }

  onPress() {

  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Form
            ref='form'
            type={this.Service}
            options={this.options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableHighlight>
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


export default ServiceForm;
