import React from 'react';
import {View, Picker, Alert} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container, Content, Spinner} from 'native-base';
import SideBar from '../Components/SideBar';
import AGRButton from '../Components/AGRButton';
import {newProfile as styles} from './styles' ;
import axios from 'axios';
import store from '../Reducers/store';

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
        matricula: '',
        especialidade: ''
      },
      user_type: [
        {
          name: 'Funcionário',
          id: 'employee'
        },{
          name: 'Gestor de Setor',
          id: 'sector_manager'
        },{
          name: 'Gestor de Instituição',
          id: 'institution_manager'
        }
      ],
      loadingHospital: true,
      isHospitalPicked: false,
      noSideBar: this.props.navigation.state.params !== void 0 ? this.props.navigation.state.params.noSideBar : false
    };
    this.options = default_profile_options;
  }

  componentDidMount() {
    const url = 'http://54.94.162.218:8083/api/hospital/list';
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
      .then((response) => {

        if (response.data === []) {
          Alert.alert(
            'Erro',
            'Não há horários criados!');
        } else {
          this.setState({hospitals: response.data, loadingHospital: false});
          this.arrayToObject();
        }
      })
      .catch(() => {});
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  onChange(value) {
    this.setState({value});
  }

  renderSpinner() {
    return (
      <Container>
        <Content>
          <Spinner color='#5f4b8b'/>
        </Content>
      </Container>
    );
  }

  selectHospital(id) {
    this.setState({selectedHospital: id});
    const url = 'http://18.231.27.220:8083/api/sector/listByHospital?hospital_id=' + id;
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
      .then((response) => {

        if (response.data === []) {
          Alert.alert(
            'Erro',
            'Não há horários criados!');
        } else {
          this.setState({sectors: response.data, isHospitalPicked: true});
          this.arrayToObject();
        }
      })
      .catch(() => {});
  }

  createProfile() {
    const url = 'http://18.231.9.190:8083/api/profile/create';
    axios.post(url, {
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      },
      user_type: this.state.userType,
      registration: this.state.value.matricula,
      speciality: this.state.value.especialidade,
      sector_id: this.state.selectedSector,
      hospital_id: this.state.selectedHospital,
      user_id: store.getState().currentUser.id
    })
    .then((response) => {
      var error = '';
      if (response.data.user_type_error) {
        error += response.data.user_type_error;
      }
      if (response.data.speciality_error) {
        error += response.data.speciality_error;
      }
      if (response.data.registration_error) {
        error += response.data.registration_error;
      }
      if (response.data.sector_id_error) {
        error += response.data.sector_id_error;
      }
      if (response.data.hospital_id_error) {
        error += response.data.hospital_id_error;
      }
      if (response.data.user_id_error) {
        error += response.data.user_id_error;
      }
      if (error !== '') {
        Alert.alert('Erro!', error);
      } else {
        Alert.alert(
          'Sucesso',
          'Seu perfil foi criado!',
          [{text: 'ok', onPress: () => this.props.navigation.navigate('profile', {noSideBar: this.state.noSideBar})}]
      );
      }
    });
  }

  selectUserType(itemValue) {
    this.setState({userType: itemValue});
  }

  selectSector(itemValue) {
    this.setState({selectedSector: itemValue});
  }

  renderPicker(selectedValue, placeholder, object, action) {
    return (
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => action(itemValue)}
      >
        <Picker.Item label={placeholder} value='' />
        {object.map((item, index) => {
          return (<Picker.Item key={index} label={item.name} value={item.id} />);
        })}
      </Picker>
    );
  }

  renderScreen(flexN) {
    const {goBack} = this.props.navigation;
    return (
      <Container style={{backgroundColor: '#FFF', flex: flexN}}>
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
        <View style={{alignItems: 'center', flexDirection: 'column', height: '30%'}} >
          {this.renderPicker(this.state.userType, 'Tipo de Perfil', this.state.user_type, this.selectUserType.bind(this))}
          {this.state.loadingHospital ? this.renderSpinner()
          : this.renderPicker(this.state.selectedHospital, 'Hospital', this.state.hospitals, this.selectHospital.bind(this))
          }
          {this.state.isHospitalPicked
          ? this.renderPicker(this.state.selectedSector, 'Setor', this.state.sectors, this.selectSector.bind(this))
          : <View />
          }
        </View>
        <AGRButton
          text = 'Cadastrar'
          onPress = {() => this.createProfile()}/>
      </Container>
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={{flex: 1}}>
        {this.state.noSideBar ? this.renderScreen(1) : (
          <View style={{flexDirection: 'row', flex: 1}}>
            <SideBar />
            {this.renderScreen(8)}
          </View>
        )}
      </View>
    );
  }
}

export default NewProfile;
