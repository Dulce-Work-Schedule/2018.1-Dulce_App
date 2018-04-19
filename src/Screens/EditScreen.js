
import React from 'react';
import {View, Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import SmallLogo from '../Components/SmallLogo';
import ValidationComponent from 'react-native-form-validator';
import store from '../Reducers/store';
import axios from 'axios';

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

  componentDidMount() {
    this.setState({loading: true});
    const url = 'http://ec2-18-231-116-217.sa-east-1.compute.amazonaws.com/api/userManager/view/?id=' + store.getState().currentUser.id ;
    axios.get(url,{
      headers: {
        'x-access-token': store.getState().currentUser.token
      }
    })
      .then((response) => {this.setState({collaborator: response.data,loading: false});
        this.setState({
          name: this.state.collaborator.name,
          registration: this.state.collaborator.registration,
          hospital: this.state.collaborator.hospital,
          sector: this.state.collaborator.sector
        });

      });
  }

  _onPressButton() {
    if (this.validate({
      name: {required: true},
      registration: {numbers: true, required: true},
      hospital: {required: true},
      sector: {required: true},
      password: {minlength: 4, maxlength: 8, required: true}
    })) {

      this.save();

    }
  }
  save() {

    axios.post('http://ec2-18-231-116-217.sa-east-1.compute.amazonaws.com/api/userManager/editUser/?id=' + this.props.navigation.state.params.userId , {
      registration: this.state.registration,

      password: this.state.password
    })
      .then((response) => {
        console.log(response.data);
        this.props.navigation.navigate('profile');
      });
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
            hospital: text})}
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
          <AGRButton style={styles.button} text='Salvar' onPress={() => {this.save(); this._onPressButton();} }/>
        </View>
      </View>
    );
  }
}
