import React from 'react';
import {View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import SmallLogo from '../Components/SmallLogo';
import ValidationComponent from 'react-native-form-validator';
import store from '../Reducers/store';


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
      name: store.getState().currentUser.name,
      registration: store.getState().currentUser.registration,
      hospital: store.getState().currentUser.hospital,
      sector: store.getState().currentUser.sector,
      password: ''
    };
  }
  _onPressButton() {
    if (this.validate({
      name: {required: true},
      registration: {numbers: true, required: true},
      hospital: {required: true},
      sector: {required: true},
      password: {minlength: 4, maxlength: 8, required: true}
    })) {}
  }
  salvar() {
    axios.post('http://172.17.0.1:8080/user/edit/' + store.getState().currentUser.id , {

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
        <AGRInput style={styles.input } value = {this.state.name}
          editable = {false}
        />
        {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input} value = {this.state.registration}
          placeholder='Matricula'
          editable = {false}
        />
        <AGRInput style={styles.input} value = {this.state.hospital}
          nameLabel='Hospital'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            name: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input} value = {this.state.sector}
          nameLabel='setor'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            sector: text})}
        />
        {this.isFieldInError('sector') && this.getErrorsInField('sector').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input} 
          nameLabel='Editar senha'
          editable = {this.state.editable}
          secureTextEntry
          onChangeText={(text) => this.setState({
            password: text})}
        />
        {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <View style={styles.alinhar}>
          <AGRButton style={styles.button} text='Salvar' onPress={() => {[this.salvar(),this._onPressButton()];}}/>
        </View>
      </View>
    );
  }
}
