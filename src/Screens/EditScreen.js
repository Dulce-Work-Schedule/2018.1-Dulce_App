import React from 'react';
import {View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import SmallLogo from '../Components/SmallLogo';
import ValidationComponent from 'react-native-form-validator';


const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 20
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    width: 140,
    height: 40,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10
  },
  alinhar: {
    flexDirection: 'row',
    alignContent: 'space-around'
  }
};
export default class EditScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
      nome: '',
      matricula: '',
      hospital: '',
      setor: '',
      senha: ''
    };
  }
  _onPressButton() {
    if (this.validate({
      nome: {required: true},
      matricula: {numbers: true, required: true},
      hospital: {required: true},
      setor: {required: true},
      senha: {minlength: 4, maxlength: 8, required: true}
    })) {}
  }
  salvar() {
    axios.post('http://172.17.0.1:8080/user/edit/' + this.props.navigation.state.params.userId , {
      registration: this.state.registration,
      password: this.state.password
    })
      .then((response) => {
       const token = response.data.token;
       this.props.navigation.navigate('list', {token: token});
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <SmallLogo/>
        <AGRInput style={styles.input } Textvalue = {this.state.Textvalue}
          placeholder='Nome'
          editable = {false}
        />
        {this.isFieldInError('nome') && this.getErrorsInField('nome').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input}
          placeholder='Matricula'
          editable = {false}
        />
        <AGRInput style={styles.input}
          nameLabel='Hospital'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            nome: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input}
          nameLabel='Setor'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            setor: text})}
        />
        {this.isFieldInError('setor') && this.getErrorsInField('setor').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input}
          nameLabel='Editar senha'
          editable = {this.state.editable}
          secureTextEntry
          onChangeText={(text) => this.setState({
            senha: text})}
        />
        {this.isFieldInError('senha') && this.getErrorsInField('senha').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <View style={styles.alinhar}>
          <AGRButton style={styles.button} text='Salvar' onPress={() => {[this.salvar(),this._onPressButton()];}}/>
        </View>
      </View>
    );
  }
}
