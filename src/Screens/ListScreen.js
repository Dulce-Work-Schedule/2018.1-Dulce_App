import React from 'react';
import {ScrollView, Alert, FlatList} from 'react-native';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner, ListItem, Left, Body, Text, Title, Header} from 'native-base';
import UserAvatar from 'react-native-user-avatar';
import ScreenHeader from '../Components/ScreenHeader';

class ListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true
    };
  }

  componentDidMount() {
    const url = 'http://172.18.0.1:8083/api/userManager/listUser';
    this.setState({loading: true});
    axios.get(url, {
      headers: {
        'x-access-token': store.getState().currentUser.token
      }
    })
      .then((response) => {
        this.setState({employees: response.data, loading: false});
      })
      .catch(() => {Alert.alert('ERRO');});
  }

  render() {
    return (
      <ScrollView>
      <ScreenHeader title='Lista de Médicos'/>
        {this.state.loading ? (
            <Container>
              <Content>
                <Spinner color= '#5f4b8b'/>
              </Content>
            </Container>
          ) : (
            <FlatList
              data = {this.state.employees}
              keyExtractor = {(item) => {return item.id.toString();}}
              renderItem={(data) => {return (
                <ListItem onPress={() => this.props.navigation.navigate('profile', {userId: data.item.id})} key={data.item.id} avatar>
                  <Left> <UserAvatar size='50' name={data.item.name} /></Left>
                  <Body><Text>{data.item.name}</Text>
                    <Text note>Matrícula: {data.item.registration}</Text></Body>
                </ListItem>
              );}}/>
          )}
      </ScrollView>
    );
  }
}
export default ListScreen;
