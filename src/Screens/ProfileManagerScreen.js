import React from 'react';
import {View} from 'react-native';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';
import SmallLogo from '../Components/SmallLogo';
import ScreenHeader from '../Components/ScreenHeader';
<<<<<<< HEAD
import SideBar from '../Components/SideBar';

=======
import {Card , CardItem , Body, Text} from 'native-base';
import IconButton from '../Components/IconButton';
>>>>>>> eeb080c... #418 começando refatoraçao da profileManagerScreen
const styles = {
  container: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#FFF'

  },
  text: {
    fontSize: 20,
    marginBottom: 15
  },
  name: {
    fontSize: 30,
    marginBottom: 15,
    alignSelf: 'center'
  },
  informacoes: {
    alignSelf: 'center',
    marginRight: 100
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
             <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={styles.text}>
                         Nome:{'\t'}{'\t'}{this.state.profile.name}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.text}>
                         Email:{'\t'}{'\t'}{this.state.profile.name}@gmail.com
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Container>
            </View>
            <View style={{flex:1,alignContent: 'space-between',flexDirection: 'row'}}>
            <IconButton 
            Icon = 'edit'
            text = 'Editar'
            onPress = {this.navigateToEditScreen()}
            />
            <IconButton 
            Icon = 'clear'
            text = 'Excluir conta'
            />
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
