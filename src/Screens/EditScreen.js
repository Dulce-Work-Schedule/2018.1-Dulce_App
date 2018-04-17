import React from 'react';
import {ScrollView, View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
import AGRButton from '../Components/AGRButton';
import AGRInput from '../Components/AGRInput';
import SmallLogo from '../Components/SmallLogo';
import ValidationComponent from 'react-native-form-validator';
import store from '../Reducers/store';
import axios from 'axios';
import { Container, Header, Content, Spinner } from 'native-base';

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
        sector: this.state.collaborator.name
      });

    ;})
}

  render() {
    return this.state.loading ? (

      <Container style={styles.container}>
        <Content>
      <Spinner color='purple'/>
      </Content>
      </Container>

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
        <AGRInput style={styles.input} defaultValue = {this.state.hospital}
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
        </ScrollView>
        </View>
      );
  }
}
