import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Fab, Icon, Spinner} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';
import {listProfile as styles} from './styles' ;
import store from '../Reducers/store';
import axios from 'axios';
import {connect} from 'react-redux';
import {actionSetProfile} from '../Actions/currentProfile';

class ListProfile extends Component {

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
      loading: true,
      noSideBar: this.props.navigation.state.params !== void 0 ? this.props.navigation.state.params.noSideBar : false
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
        console.log(response.data);
        if (response.data.length === 0) {
          this.setState({loading: false});
          this.props.navigation.navigate('newProfile', {noSideBar: this.state.noSideBar});
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
                        profile.sector_id = element.sector_id;
                        profile.hospital_id = element.hospital_id;
                        profile.id = element.id;

                        this.state.profiles = [...this.state.profiles, profile];
                      }
                      item++;
                      if (item === response.data.length) {
                        console.log(this.state.profiles);
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
    this.props.navigation.navigate('newProfile', {noSideBar: this.state.noSideBar});
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

  goToProfile(item) {
    this.props.setCurrentProfile(item);
    this.props.navigation.navigate('initial');
  }

  renderCard(item) {
    console.log('PARAMS:');
    console.log(this.props.navigation.state.params);
    return (
      <Card iconLeft>
        <CardItem style={styles.center} button onPress={() => this.goToProfile(item)}>
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

  renderScreen(flexN) {
    return (
      <View style={{flex: flexN}}>
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
    );
  }
  render() {
    return (
      <View style={{flex: 1}} >
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

const mapStateToProps = (state) => {
  return {
    currentProfile: state.currentProfile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentProfile: (api_profile) => {
      const currentProfile = {
        id: api_profile.id,
        registration: api_profile.registration,
        hospital: api_profile.hospital,
        sector: api_profile.sector,
        sector_id: api_profile.sector_id
      };
      return dispatch(actionSetProfile(currentProfile));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProfile);
