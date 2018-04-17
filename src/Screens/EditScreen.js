import React from 'react';
<<<<<<< HEAD
import {ScrollView, View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
=======
import {View, Text} from 'react-native';
>>>>>>> 5beeb69... #194 arrumando parte das telas
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import SmallLogo from '../Components/SmallLogo';
import ValidationComponent from 'react-native-form-validator';
import store from '../Reducers/store';
<<<<<<< HEAD
<<<<<<< HEAD
import axios from 'axios';
import { Container, Header, Content, Spinner } from 'native-base';
=======
>>>>>>> 85748c1... #194 dando comando eslint --fix
=======
import axios from 'axios';
>>>>>>> 5beeb69... #194 arrumando parte das telas

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
      collaborator: {},
      password: '',
      name: '',
      registration: '',
      hospital: '',
      sector:'',
      loading: true
    };
  }

  save() {
  axios.post('http://172.17.0.1:8080/user/edit/' + store.getState().currentUser.id , {

    password: this.state.password
  })
    .then((response) => {
      const token = response.data.token;
      this.props.navigation.navigate('list', {token: token});
    });
}
  _onPressButton() {
    if (this.validate({
      name: {required: true},
      registration: {numbers: true, required: true},
      hospital: {required: true},
      sector: {required: true},
      password: {minlength: 4, maxlength: 8, required: true}
    })) {this.save();}
  }
  save() {
    axios.post('http://172.17.0.1:8080/user/edit/' + store.getState().currentUser.id , {
      name: this.state.name,
      registration: this.state.registration,
      hospital: this.state.hospital,
      sector: this.state.sector,
      password: this.state.password
    })
      .then((response) => {
       this.props.navigation.navigate('list');
      })
  }
  componentDidMount(){
    this.setState({loading: true});

    const url = 'http://172.17.0.1:8080/user/view/' +  store.getState().currentUser.id ;


    axios.get(url,{

      headers: {
        'x-access-token': store.getState().currentUser.token
      }

    })

    .then((response) => {this.setState({collaborator: response.data,loading: false})
      this.setState({
        name: this.state.collaborator.name,
        registration: this.state.collaborator.registration,
        hospital: this.state.collaborator.hospital,
        sector: this.state.collaborator.sector
      });

    ;})
}
    }))
  { this.save()}


}
  render() {
    return this.state.loading ? (

      <View/>

        ) : (
        <View style={styles.container}>
        <SmallLogo/>
        <ScrollView>
        <AGRInput style={styles.input } value = {this.state.name}
          editable = {false}
          onChangeText={(text) => this.setState({
            name: text})}
        />
        {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input} value = {this.state.registration}
          placeholder='Matricula'
          editable = {false}
          onChangeText={(text) => this.setState({
            registration: text})}
        />
        <AGRInput style={styles.input} value = {this.state.hospital}
          nameLabel='Hospital'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            name: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <AGRInput style={styles.input} value = {this.state.sector}
          nameLabel='Setor'
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
          <AGRButton style={styles.button} text='Salvar' onPress={() => {this.save(); this._onPressButton();}}/>
        </View>
      );
  }
}
