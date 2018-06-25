import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Fab, Icon, Spinner} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';
import {listProfile as styles} from './styles' ;
import store from '../Reducers/store';
import axios from 'axios';

export default class ListProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name: 'Hospital Regional Do Gama',
          matricula: '123456',
          setor: 'Jimmy'
        },{
          name: 'Hospital Regional da Asa Norte',
          matricula: '160119553',
          setor: 'Fepas Beauty'
        }
      ],
      profiles: [],
      loading: true
    };
  }

  componentDidMount() {
    /*eslint max-nested-callbacks: ["error", 4]*/
    const url = 'http://18.231.9.190:8083/api/profile/list?user_id=' + store.getState().currentUser.id;
    console.log(store.getState().currentUser.id);
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
      .then((response) => {
        if (response.data === []) {
          Alert.alert(
            'Erro',
            'Não há Perfis criados!');
        } else {

          console.log(response.data);
          let item = 0;

          response.data.forEach(async (element) => {
            let profile = {};

            let url2 = 'http://54.94.162.218:8083/api/hospital/view?hospital_id=' + element.hospital_id;
            let url3 = 'http://18.231.27.220:8083/api/sector/view?sector_id=' + element.sector_id;
            await axios.get(url2, {
              headers: {
                'Authorization': 'Bearer ' + store.getState().currentUser.token
              }
            })
              .then((response1) => {
                if (response1.data === []) {
                  Alert.alert(
                    'Erro',
                    'Não há hospitais com esse id!');
                } else {

                  profile.hospital = response1.data.name;
                  axios.get(url3, {
                    headers: {
                      'Authorization': 'Bearer ' + store.getState().currentUser.token
                    }
                  })
                    .then((response2) => {
                      if (response2.data === []) {
                        Alert.alert(
                          'Erro',
                          'Não há setores com esse id!');
                      } else {
                        profile.registration = element.registration;
                        profile.sector = response2.data.name;
                        this.state.profiles = [...this.state.profiles, profile];
                      }
                      item++;
                      if (item === response.data.length) {
                        this.setState({loading: false});
                      }
                    });

                }
              });

          });

        }
      });
  }

  navigateToNewProfile() {
    this.props.navigation.navigate('profile');
  }

  fab() {
    return (
      <Fab
        active={true}
        direction='up'
        containerStyle={{}}
        style={{backgroundColor: '#5f4b8b'}}
        position='bottomRight'
        onPress={() => {this.navigateToNewProfile();}}>
        <Icon type='MaterialIcons' name='add' />
      </Fab>);
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

  renderCard(item) {
    return (
      <Card iconLeft>
        <CardItem style={styles.center} button onPress={() => {}}>
          <Body>
            <Text style={styles.colorPurple}>{item.hospital}</Text>
            <View style={{flexDirection: 'row',flex: 1}}>
              <Icon type='MaterialCommunityIcons' name='hospital-building'
                style={{padding: 10, fontSize: 40, color: '#5f4b8b'}}/>
              <View style= {{marginTop: 10}} >
                <Text style={styles.text} > Setor: <Text style={styles.textPurple}>{item.sector}</Text></Text>
                <Text style={styles.text} > Matricula: <Text style={styles.textPurple}>{item.registration}</Text></Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={{flex: 8}}>
          <Container>
            <ScreenHeader
              title = 'Perfis'
            />
            {this.state.loading ? (this.renderSpinner()) : (
              <Content>
                <List dataArray={this.state.profiles}
                  renderRow={(item) => (
                    this.renderCard(item))} />
              </Content>
            )}
          </Container>
          {this.fab()}
        </View>
      </View>
    );
  }
}
