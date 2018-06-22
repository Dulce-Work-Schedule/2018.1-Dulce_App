import {editScreen as styles} from './styles' ;
import React from 'react';
import {View, Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import ValidationComponent from 'react-native-form-validator';
import store from '../Reducers/store';
import axios from 'axios';
import {Container, Content, Spinner} from 'native-base';
import t from '../Components/Form';
import IconButton from '../Components/IconButton';
import SideBar from '../Components/SideBar';


const Form = t.form.Form;

export default class EditScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.Service = t.struct({
      nome: t.String,
      sobrenome: t.String,
      email: t.String
    });
    this.state = {
      value: {
        nome: store.getState().currentUser.firstName,
        sobrenome: store.getState().currentUser.lastName,
        email: store.getState().currentUser.email
      },
      loading: true
    };
    this.options = {
      fields: default_field_options,
      stylesheet: formStyles
    };
  }

  onChange(value) {
    this.setState({value});
  }

  edit() {
    const url = 'http://52.67.4.137:8083/api/user/edit/?id=' + store.getState().currentUser.id;
    console.log(url);
    console.log(store.getState().currentUser.token);
    this.setProfile();
    axios.put(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      },
      data: this.state.profile
    })
    .then((response) => {
      console.log(response.data);
      Alert.alert(
        'Sua conta foi editada com sucesso!',
        {text: 'ok', onPress: () => { this.props.navigation.navigate('profile'); }}
      );
    });
  }

  setProfile() {
    this.setState({
      profile: {
        firstName: this.state.value.nome,
        lastName: this.state.value.nome,
        email: this.state.value.email
      }
    });
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar/>
        <View style={{flex: 8}}>
        <ScreenHeader title='Editar conta' />
          <Container style={{backgroundColor: '#FFF'}}>
            <View style={styles.container}>
                <Form
                  ref='form'
                  options={this.options}
                  value={this.state.value}
                  type={this.Service}
                  onChange={(v) => this.onChange(v)}
                />
              </View>
              <IconButton
                text = 'Editar'
                onPress = {() => {this.edit();}}
                style = {styles.button}
                icon= 'save'
              />
          </Container>
        </View>
      </View>
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
  nome: {
    error: 'Campo obrigatório'
  },
  sobrenome: {
    error: 'Campo obrigatório'
  },
  email: {
    error: 'Campo obrigatório'
  }
};
