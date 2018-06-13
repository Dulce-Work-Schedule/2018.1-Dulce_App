import React from 'react';
import {View,Text, Picker} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container} from 'native-base';
import SignUpButton from '../Components/SignUpButton';

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFF'
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
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    color: 'black',
    fontFamily: 'Raleway'
  }
};
const default_profile_state_value = {
  value: {
    nome: '',
    setor: '',
    matricula: '',
    hospital: ''
  },
  userType: ''
};
const Form = t.form.Form;
const default_profile_options = {
  fields: {
    Nome: {
      error: 'Campo obrigatório'
    },
    Email: {
      error: 'Campo obrigatório'
    },
    senha: {
      secureTextEntry: true,
      error: 'Campo obrigatório'
    },
    confirmarSenha: {
      secureTextEntry: true,
      error: 'Campo obrigatório'
    }
  },
  stylesheet: formStyles
};
class NewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.Service = t.struct({
      nome: t.String,
      setor: t.String,
      matricula: t.String,
      hospital: t.String
    });
    this.state = default_profile_state_value;
    this.options = default_profile_options;
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  pickerButton() {
    return (
      <Picker
        selectedValue={this.state.userType}
        style={{height: 50, width: 200,marginBottom: 5,marginLeft: 10}}
        onValueChange={(itemValue) => this.setState({userType: itemValue})}>
        <Picker.Item label='Funcionário' value='employee' />
        <Picker.Item label='Gestor do setor' value='sector_manager' />
        <Picker.Item label='gestor da instituição' value='institution_manager' />
      </Picker>
    );
  }

  onChange(value) {
    this.setState({selected: value});
  }

  render() {

    return (
      <Container style={{backgroundColor: '#FFF'}}>
        <ScreenHeader title = 'Criar novo perfil' icon='arrow-back' />
        <View style={styles.container}>
          <Form
            ref='form'
            type={this.Service}
            value={this.state.value}
            options={this.options}
            onChange={(v) => this.onChange(v)}
          />
        </View>
        <Text style={styles.text}> Selecione o tipo de Funcionário que deseja criar </Text>
        {this.pickerButton()}
        <View style={{flex: 1}}>
          <SignUpButton
            text = 'Cadastrar'
            onPress = {() => {}}
          />
        </View>
      </Container>
    );
  }
}

const formStyles = {
  ...Form.stylesheet,
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 3,
    fontWeight: '600'
  }
};

export default NewProfile;
