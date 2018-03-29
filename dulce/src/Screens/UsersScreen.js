import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';
import AGRButton from '../Components/AGRButton';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  text: {
    fontSize: 48
  }
};

class UsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.setState({ loading: true });
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      this.setState({ users: json, loading: false })
    })
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          this.state.loading ? (
            <Text style={styles.text}>Carregando...</Text>
          ) : (
            <FlatList
              data={this.state.users}
              keyExtractor={(item) => {
                return item.id.toString();
              }}
              renderItem={(data) => {
                return <AGRButton text={data.item.name}  onPress={() => this.props.navigation.navigate('users')} />
              }}
            />
          )
        }
      </ScrollView>
    );
  }
}

export default UsersScreen;
