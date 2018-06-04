import React from 'react';
import {View, Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import axios from 'axios';
import store from '../Reducers/store';

const styles = {

  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignSelf: 'center'
  },
  name: {
    fontSize: 30,
    marginBottom: 15,
    alignSelf: 'center'
  },
  informacoes: {
    alignSelf: 'center'
  }

};

export class EmployeeProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      loading: true
    };
  }
  componentDidMount() {

    const url = 'http://172.18.0.1:8083/api/userManager/listById/?id=' + store.getState().currentUser.id ;
    this.setState({loading: true});

    axios.get(url, {

      headers: {
        'x-access-token': store.getState().currentUser.token
      }
    })
      .then((response) => { this.setState({employee: response.data, loading: false});});
  }

  goToEditScreen() {
    this.props.navigation.navigate('edit');
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ? (<Text style={styles.text}>Carregando...</Text>) : (
            <View style={styles.informacoes}>
              <Text style={styles.name}>{this.state.employee.name}</Text>
              <Text style={styles.text}>CRM/Matricula:{this.state.employee.registration}</Text>
              <Text style={styles.text}>setor: {this.state.employee.sector}</Text>
              <Text style={styles.text}>Cirurgião</Text>
              <Text style={styles.text}>Hospital do Gama</Text>
              <View style={{height: 50}} />
              <AGRButton
                text='editar'
                onPress={() => this.goToEditScreen()} />
            </View>
          )
        }
      </View>
    );
  }
}

export default EmployeeProfileScreen;
