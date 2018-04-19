import React from 'react';
import {View , Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50 ,
    backgroundColor: '#FFF'

  },
  text: {
    fontSize: 30,
    marginBottom: 15,
    alignSelf: 'center'
  },
  name: {
    fontSize: 42,
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

    const url = 'http://localhost:8080/api/userManager/listById' + store.getState().currentUser.id;

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
              <Text style={styles.name}>{this.state.profile.name}</Text>
              <Text style={styles.text}>Matriula:</Text>
              <Text style={styles.text}>{this.state.profile.registration}</Text>
              <Text style={styles.text}>Setor: Pediatria</Text>
              <Text style={styles.text}>Hospital do Gama</Text>
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
