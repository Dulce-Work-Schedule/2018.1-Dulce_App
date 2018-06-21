import React from 'react';
import {View,Text, Picker} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from '../Components/Form';
import {Container} from 'native-base';
import SideBar from '../Components/SideBar';
import AGRButton from '../Components/AGRButton';
import {newProfile as styles} from './styles' ;

<<<<<<< 2e01c13f8d06fd1a47a197f51d58bc14aade13d5
=======
const default_profile_state_value = {
  value: {
    matricula: '',
    especialidade: ''
  },
  user_type: [
    {
      name: 'hospital Santa Maria',
      id: 'hospital1'
    },{
      name: 'hospital gama',
      id: 'hospital2'

    }
  ]
};
>>>>>>> #482 componentizando picker para receber dados das apis
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
  }
};
class NewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.profile_basics = t.struct({
      matricula: t.String,
      especialidade: t.String
    });
    this.state = {
      value: {
        nome: '',
        setor: '',
        matricula: '',
        hospital: ''
      },
      userType: '',
      noSideBar: this.props.navigation.state.params !== void 0 ? this.props.navigation.state.params.noSideBar : false
    };
    this.options = default_profile_options;
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  pickerButton(object, text) {
    return (
      <View>
        <Text style={styles.text}> {text} </Text>
        <Picker
          selectedValue={this.state.userType}
          style={{height: 50, width: 200,marginBottom: 5,marginLeft: 10}}
          onValueChange={(itemValue) => this.setState({userType: itemValue})}
        >
        {object.map((item, index) => {
          return (<Picker.Item key={index} label={item.name} value={item.id} />);
        })}
        </Picker>
      </View>
    );
  }

  onChange(value) {
    this.setState({selected: value});
  }

  renderScreen(flexN) {
    const {goBack} = this.props.navigation;
    return (
<<<<<<< 2e01c13f8d06fd1a47a197f51d58bc14aade13d5
      <Container style={{backgroundColor: '#FFF', flex: flexN}}>
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
          <AGRButton
            text = 'Cadastrar'
            onPress = {() => {}}/>
        </View>
      </Container>
    );
  }

  render() {
    return (
      <View style={{flex: 1}} >
        {this.state.noSideBar ? this.renderScreen(1) : (
          <View style={{flexDirection: 'row', flex: 1}}>
            <SideBar />
            {this.renderScreen(8)}
=======
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <Container style={{backgroundColor: '#FFF', flex: 8}}>
          <ScreenHeader title = 'Criar novo perfil' goBack = {() => goBack()} />
          <View style={styles.container}>
            <Form
              ref='form'
              type={this.profile_basics}
              value={this.state.value}
              options={this.options}
              onChange={(v) => this.onChange(v)}
            />
          </View>
          {this.pickerButton(this.state.user_type, 'Selecione o tipo de Funcionário que deseja criar')}
          <View style={{flex: 1}}>
            <AGRButton
              text = 'Cadastrar'
              onPress = {() => {}}/>
>>>>>>> #482 componentizando picker para receber dados das apis
          </View>
        )}
      </View>
    );
  }
}

export default NewProfile;
