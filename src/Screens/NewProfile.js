import React from 'react';
import {View,Text, Picker} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container} from 'native-base';
import SideBar from '../Components/SideBar';
import SignUpButton from '../Components/SignUpButton';
import {newProfile as styles} from './styles' ;

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
  stylesheet: styles.text
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
    const {goBack} = this.props.navigation;
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <Container style={{backgroundColor: '#FFF', flex: 8}}>
          <ScreenHeader title = 'Criar novo perfil' goBack = {() => goBack()} />
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
              onPress = {() => {}}/>
          </View>
        </Container>
      </View>
    );
  }
}

export default NewProfile;
