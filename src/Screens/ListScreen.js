import React from 'react';
import {View, Text, Button, FlatList, ScrollView} from 'react-native';
import UserItem from '../Components/UserItem';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  text: {
    fontSize: 48,
    color: 'black'
  }
};

class ListScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees: [],
      loading: true
    }
  }

  componentDidMount(){
    const fetch = require('isomorphic-fetch')
    const url = 'https://jsonplaceholder.typicode.com/users'
    this.setState({loading: true});
    fetch(url)
    .then((response) => {return response.json();})
    .then((json) => {this.setState({employees: json, loading: false})})
  };

  render (){
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {
        this.state.loading ? (
          <Text style={styles.text}>Carregando...</Text>
        ) : (
          <FlatList
            data = {this.state.employees}
            keyExtractor = {(item) => {return item.id.toString();}}
            renderItem={(data) =>{return <UserItem text={data.item.name}
            onPress={()=> this.props.navigation.navigate('profile', {userId: data.item.id})}
              />

              }}
            />
          )
        }
      </ScrollView>
    );
  }
}

export default ListScreen;
