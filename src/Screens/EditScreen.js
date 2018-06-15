import {editScreen as styles} from './styles' ;
import React from 'react';
import {View} from 'react-native';
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
      email: t.String,
      senha: t.String,
      confirmarSenha: t.String
    });
    this.state = {
      value: {},
      profile: {},
      loading: true
    };
    this.options = {
      fields: default_field_options,
      stylesheet: formStyles
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    const url = 'http://18.231.9.190:8083/api/userManager/listById/?id=' + store.getState().currentUser.id;
    console.log(url);
    console.log(store.getState().currentUser.token);
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      const default_state = {
        nome: response.data.name,
        email: response.data.registration,
        senha: '',
        confirmarSenha: ''
      };
      this.setState({profile: response.data, value: default_state , loading: false});
      console.log(this.state.profile);
    });
  }

  onChange(value) {
    this.setState({value});
  }
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container >
        <ScreenHeader title='Editar conta' />
          {
            this.state.loading ? (
              <Container>
              <SideBar />
                <Content>
                  <Spinner color='#5f4b8b'/>
                </Content>
              </Container>
          ) : (
            <Container style={{backgroundColor: '#FFF'}}>
            <SideBar />
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
                onPress = {() => {}}
                style = {styles.button}
              />
          </Container>
        )}
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
