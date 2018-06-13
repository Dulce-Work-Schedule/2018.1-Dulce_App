import React from 'react';
import {View} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import ValidationComponent from 'react-native-form-validator';
//import store from '../Reducers/store';
//import axios from 'axios';
import {Container} from 'native-base';
import t from 'tcomb-form-native';
import SignUpButton from '../Components/SignUpButton';

const Form = t.form.Form;

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    color: 'black',
    fontFamily: 'Raleway'
  },
  button: {
    height: 45,
    paddingHorizontal: 50,
    backgroundColor: '#5f4b8b',
    alignSelf: 'center',
    alignItems: 'center',
    width: 145
  }
};


export default class EditScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.Service = t.struct({
      nome: t.String,
      email: t.String,
      senha: t.String,
      confirmarSenha: t.String
    });
    this.state = {
      value: default_state
    };
    this.options = {
      fields: default_field_options,
      stylesheet: formStyles
    };
  }

  onChange(value) {
    this.setState({value});
  }
  render() {
    return (
<<<<<<< HEAD
      <Container>
        <ScreenHeader title='Editar conta' />
        <View style={styles.container}>
          <Form
            ref='form'
            options={this.options}
            value={this.state.value}
            type={this.Service}
            onChange={(v) => this.onChange(v)}
          />
        </View>
        <SignUpButton
          text = 'Editar'
          onPress = {() => {}}
          style = {styles.button}
        />
      </Container>
=======
      <View style={styles.container}>
      <ScreenHeader title='Editar Perfil' icon='arrow-back'/>
        <ScrollView>
          <SmallLogo/>
          <AGRInput style={styles.input} value = {this.state.name} editable = {false} nameLabel='Nome'/>
          {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <AGRInput style={styles.input} value = {this.state.registration} editable = {false}
            placeholder='Matricula' nameLabel='Matrícula'/>
          <AGRInput value = {this.state.hospital} style={styles.input} editable = {this.state.editable}
            nameLabel='Hospital' onChangeText={(text) => this.setState({hospital: text})}/>
          {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <AGRInput style={styles.input} value = {this.state.sector} editable = {this.state.editable}
            nameLabel='setor' onChangeText={(text) => this.setState({sector: text})}/>
          {this.isFieldInError('sector') && this.getErrorsInField('sector').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <AGRInput style={styles.input} editable = {this.state.editable} nameLabel='Editar senha'
            secureTextEntry onChangeText={(text) => this.setState({password: text})}/>
          {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
          <View style={styles.alinhar}>
            <AGRButton style={styles.button} text='Salvar' onPress={() => {this.save(); this._onPressButton();} }/>
          </View>
        </ScrollView>
      </View>
>>>>>>> 9930bc4... #386 Adicionando botões nas telas
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

const default_field_options = {
  Nome: {
    error: 'Campo obrigatório'
  },
  confirmarSenha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  },
  Email: {
    error: 'Campo obrigatório'
  },
  senha: {
    secureTextEntry: true,
    error: 'Campo obrigatório'
  }
};

const default_state = {
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: ''
};
