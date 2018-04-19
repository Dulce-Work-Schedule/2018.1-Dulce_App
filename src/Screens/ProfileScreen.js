import React from 'react';
import {View, Text} from 'react-native';
import ScaleIcon from '../Components/ScaleIcon';
import axios from 'axios';
import store from '../Reducers/store';

const styles = {
  text: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'black',
    margin: 15
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collaborator: {},
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    const url = 'http://192.168.0.17:8083/api/userManager/listById/?id=' + this.props.navigation.state.params.userId;
    axios.get(url,{

      headers: {
        'x-access-token': store.getState().currentUser.token
      }

    })

      .then((response) => {this.setState({collaborator: response.data,loading: false});});
  }
  render() {
    return this.state.loading ? (<View />) : (

      <View style = {{flex: 1}}>
        <Text style = {styles.text}>Nome: {this.state.collaborator.name}</Text>
        <Text style = {styles.text}>Matrícula: {this.state.collaborator.registration}</Text>
        <Text style = {styles.text}>Hospital: {this.state.collaborator.hospital}</Text>
        <Text style = {styles.text}>Setor: {this.state.collaborator.sector}</Text>

        <View style = {styles.icon}>
          <ScaleIcon onPress = {() => null} />
        </View>
      </View>
    );

  }

}

export default ProfileScreen;
