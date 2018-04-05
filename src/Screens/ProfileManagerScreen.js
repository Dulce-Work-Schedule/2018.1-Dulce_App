import React from 'react';
import {View , Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallButton from '../Components/SmallButton';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50 ,
    backgroundColor: '#FFF',

  },
  text: {
    fontSize:36,
    marginBottom:15,
    alignSelf: 'center'
  },
  informacoes: {
    alignSelf: 'center'
  }


}

class ProfileManagerScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: [],
      loading: true
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.setState({ loading: true});
    fetch(url)
    .then((response) => {return response.json();})
    .then((json) => {this.setState({profile: json , loading: false});})
  }

  render(){
    return(

    )
  }



}



export default ProfileManagerScreen;
