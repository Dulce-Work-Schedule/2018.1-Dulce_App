import React from 'react';
import {View , Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';
import SmallLogo from '../Components/SmallLogo';
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
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

    const url = 'http://ec2-18-231-116-217.sa-east-1.compute.amazonaws.com/api/userManager/listById/?id=' + store.getState().currentUser.id;

    axios.get(url,{

      headers: {
        'x-access-token': store.getState().currentUser.token
      }

    })
      .then((response) => {this.setState({profile: response.data , loading: false});});
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ? (
            <Container>
              <Content>
                <Spinner color='purple'/>
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
              <AGRButton text='Editar'onPress = {() => this.props.navigation.navigate('edit')}/>
            </View>
          )
        }
      </View>
    );
  }
}

export default ProfileManagerScreen;
