import React from 'react';
import {View , Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';
import SmallLogo from '../Components/SmallLogo';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';

const styles = {
  container: {
    flex: 8,
    flexDirection: 'column',
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

class ProfileManagerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading: true});

    const url = 'http://18.231.9.190:8083/api/userManager/listById/?id=' + store.getState().currentUser.id;

    axios.get(url,{

      headers: {
        'x-access-token': store.getState().currentUser.token
      }

    })
      .then((response) => {this.setState({profile: response.data , loading: false});});
  }
  navigateToEditScreen() {
    this.props.navigation.navigate('edit');
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={styles.container}>
          <ScreenHeader title='Meu Perfil' />
          {
            this.state.loading ? (
              <Container>
                <Content>
                  <Spinner color='#5f4b8b'/>
                </Content>
              </Container>
            ) : (
              <View style={styles.informacoes}>
                <SmallLogo />
                <Text style={styles.name}>{this.state.profile.name}</Text>
                <Text style={styles.text}>Matrícula:{this.state.profile.registration}</Text>
                <Text style={styles.text}>Setor: {this.state.profile.sector}</Text>
                <Text style={styles.text}>Hospital: {this.state.profile.hospital}</Text>
                <View style={{marginTop: 60}} />
                <AGRButton text='Editar'onPress = {() => this.navigateToEditScreen()}/>
              </View>
            )
          }
        </View>
      </View>
    );
  }
}

export default ProfileManagerScreen;
