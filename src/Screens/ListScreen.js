import React from 'react';
import {Text, FlatList, ScrollView, Alert} from 'react-native';
import UserItem from '../Components/UserItem';
import axios from 'axios';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15
  },
  text: {
    fontSize: 48,
    color: 'black'
  }
};

class ListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true
    };
  }

  componentDidMount() {
    const url = 'http://172.17.0.1:8080/user/all';
    this.setState({loading: true});
    axios.get(url, {
      headers: {
        'x-access-token': this.props.navigation.state.params.token
      }
    })
    .then((response) => {
      this.setState({employees: response.data, loading: false});
    })
    .catch(() => {Alert.alert('ERRO');});
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {
        this.state.loading ? (
          <Text style={styles.text}>Carregando...</Text>
        ) : (
          <FlatList
            data = {this.state.employees}
            keyExtractor = {(item) => {return item._id.toString();}}
            renderItem={(data) => {return <UserItem text={data.item.name}
            onPress={() => this.props.navigation.navigate('profile', {userId: data.item._id, token: this.props.navigation.state.params.token})}
              />;

            }}
            />
          )
        }
      </ScrollView>
    );
  }
}

export default ListScreen;
