import React from 'react';
import {View, TextInput, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import ValidationComponent from 'react-native-form-validator';
import SmallLogo from '../Components/SmallLogo';
const logo = require('../../assets/img/logo.png');
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 20
  },
  input: {
    height: 36,
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
      editable: false,
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
  tornarVisivel() {
    this.setState({
      editable: !this.state.editable
    });
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
      <SmallLogo />
      <ScrollView>
        <AGRInput Textvalue = {this.state.Textvalue}
          placeholder='Nome'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            nome: text})}
        />
        {this.isFieldInError('nome') && this.getErrorsInField('nome').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput
          placeholder='Matricula'
          editable = {false}
        />
        <AGRInput
          placeholder='Hospital'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            hospital: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput
          placeholder='Setor'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            setor: text})}
        />
        {this.isFieldInError('setor') && this.getErrorsInField('setor').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput
          placeholder='Editar senha'
          editable = {this.state.editable}
          secureTextEntry
          onChangeText={(text) => this.setState({
            senha: text})}
        />
        {this.isFieldInError('senha') && this.getErrorsInField('senha').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <View style={styles.alinhar}>
          <TouchableHighlight
            style= {styles.button}
            onPress={() => {this.tornarVisivel();}}>
            <Text>Editar perfil</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style= {styles.button}
            onPress={() => {[this.salvar(),this._onPressButton()];}}>
            <Text>Salvar</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </View>
    );
  }
}
