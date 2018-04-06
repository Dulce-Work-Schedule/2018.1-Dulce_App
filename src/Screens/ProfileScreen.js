import React from 'react';
import {View, Text} from 'react-native';
import ScaleIcon from '../Components/ScaleIcon';

const styles = {
  text: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'black',
    margin: 15
  }
}

class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collaborator: {},
      loading: true
    }
  }

  componentDidMount(){

    this.setState({loading: true});

    const url = 'https://jsonplaceholder.typicode.com/users/' + this.props.navigation.state.params.userId;

    fetch(url)

    .then((response) => {return response.json();})
    .then((json) => {this.setState({collaborator: json,loading: false});})
}
    render() {
      return this.state.loading ? (<View />) : (

        <View>
        <Text style = {styles.text}>Nome: {this.state.collaborator.name}</Text>
        <Text style = {styles.text}>CRM/Matricula: {this.state.collaborator.address.geo.lng}</Text>
        <Text style = {styles.text}>Setor: {this.state.collaborator.address.suite}</Text>
        <Text style = {styles.text}>Especialidade: {this.state.collaborator.address.city}</Text>
        <Text style = {styles.text}>Hospital: {this.state.collaborator.address.city}</Text>

        <ScaleIcon onPress = {() => null} />
      

        </View>
      )

    }

  }


export default ProfileScreen;