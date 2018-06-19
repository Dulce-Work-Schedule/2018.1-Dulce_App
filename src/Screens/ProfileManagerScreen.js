import React from 'react';
import {View} from 'react-native';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';
import SmallLogo from '../Components/SmallLogo';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';
import {Text,Button} from 'native-base';
import IconButton from '../Components/IconButton';
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
    alignSelf: 'center',
    marginRight: 100
  },
  transparentButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 170,
    margin: 20,
    marginHorizontal: 120
  },
  textButtonTrasparent: {
    color: '#fd7d01',
    fontSize: 17,
    fontFamily: 'Raleway',
    alignItems: 'center'
  }
};

class ProfileManagerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    const url = 'http://18.231.9.190:8083/api/userManager/listByid/?id=' + store.getState().currentUser.id;
    console.log(url);
    console.log(store.getState().currentUser.token);
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      this.setState({profile: response.data, loading: false});
    });
    /* .catch(() => {
      Alert.alert(
        'Erro',
        'Verifique sua conexão.');
    }); */
  }

  navigateToEditScreen() {
    this.props.navigation.navigate('edit');
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

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
      <SideBar />
      <View style={styles.container}>
        <ScreenHeader title='Meu Perfil' icon='arrow-back'/>
        {
          this.state.loading ? (
            this.renderSpinner()
          ) : (
            <View style={{flex: 1}}>
            <View style={{flex: 1}}>
            <SmallLogo />
              <Text style={styles.text}>
               Nome:{'\t'}{'\t'}{this.state.profile.name}
              </Text>
              <Text style={styles.text}>
               Email:{'\t'}{'\t'}{this.state.profile.name}@gmail.com
              </Text>
            </View>
            <View style={{flex: 1 ,alignItems: 'center'}}>
            <IconButton
            Icon = 'edit'
            text = 'Editar'
            onPress={() => this.navigateToEditScreen()}
            />
              <Button transparent warning style={styles.transparentButton}>
            <Text  style={styles.textButtonTrasparent}>Excluir conta</Text>
            </Button>
            </View>
           </View>
          )
        }
      </View>
      </View>
    );
  }
}

export default ProfileManagerScreen;
