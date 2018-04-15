import React from 'react';
import {View, Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import axios from 'axios';
import store from '../Reducers/store';
import { Container, Header, Content, Spinner } from 'native-base';
const styles = {

  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 30,
    marginBottom: 15,
    alignSelf: 'center'
  },
  name: {
    fontSize: 40,
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

    const url = 'http://172.17.0.1:8080/user/view/' + store.getState().currentUser.id ;
    this.setState({loading: true});
    fetch(url)
    .then((response) => {return response.json();})
    .then((json) => {this.setState({employee: json,loading: false});})
  }

  render(){
    return(
      <View style={styles.container}>
      {
        this.state.loading ? (

          <Container>
            <Content>
          <Spinner color='purple' />
          </Content>
          </Container>

        ) : (
          <View style={styles.informacoes}>
          <Text style={styles.name}>{this.state.employee[0].name}</Text>
          <Text style={styles.text}>CRM/Matricula:</Text>
          <Text style={styles.text}>{this.state.employee[0].address.zipcode}</Text>
          <Text style={styles.text}>setor: Pediatria</Text>
          <Text style={styles.text}>Cirurgião</Text>
          <Text style={styles.text}>Hospital do Gama</Text>
          <View style={{height: 50}} />
          <AGRButton
          text='Editar'
          onPress={() => this.props.navigation.navigate('edit')} />
          </View>


        )
      }
    axios.get(url, {

      headers : {
        'x-access-token': store.getState().currentUser.token
      }

    })
      .then((response) => { this.setState({employee: response.data, loading: false});});
  )}

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
                onPress={() => this.props.navigation.navigate('edit')} />
            </View>


          )

        }
      </View>
    );

  }



}

export default EmployeeProfileScreen;
