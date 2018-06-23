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
import {profileManagerScreen as styles} from './styles' ;

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
    const url = 'http://52.67.4.137:8083/api/user/listByid/?id=' + store.getState().currentUser.id;
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
      <View style={{flexDirection: 'row', flex: 1}}><SideBar />
        <View style={styles.container}>
          <ScreenHeader title='Meu Perfil' icon='arrow-back'/>
          {this.state.loading ? (
            this.renderSpinner()) : (
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <SmallLogo />
                <View style={{alignItems: 'center', justifyContent: 'center', width: '80%', alignSelf: 'center'}} >
                  <Text style={styles.text}> {this.state.profile.firstName} {this.state.profile.lastName}</Text>
                  <Text style={styles.textEmail}> {this.state.profile.email}</Text>
                </View>
              </View>
              <View style={{flex: 1 ,alignItems: 'center'}}>
                <IconButton
                  icon = 'edit'
                  text = 'Editar'
                  onPress={() => this.navigateToEditScreen()}/>
                <Button transparent warning style={styles.transparentButton}>
                  <Text style={styles.textButtonTrasparent}>Excluir conta</Text>
                </Button>
              </View>
            </View>
          )}
        </View>
      </View>
    );}
}

export default ProfileManagerScreen;
