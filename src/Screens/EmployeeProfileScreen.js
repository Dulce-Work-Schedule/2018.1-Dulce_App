import React from 'react';
import {View , Text} from 'react-native';

class EmployeeProfileScreen extends React.native{

  constructor(props){
    super(props);
    this.state = {

      employees: [],
      loading: true

    }

  }

  componentDidMount(){

    this.setState({loading: true});
    const url = '';
    fetch(url)
    .then((response) => {return response.json();})
    .then((json) => {this.setState({employees: json,loading: false});})

  }

  render(){

    return this.state.loading ? (<View />) : ( );

  }
}

export default EmployeeProfileScreen;
