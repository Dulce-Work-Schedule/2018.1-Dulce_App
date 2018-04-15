import React from 'react';
import {FlatList, ScrollView, Alert} from 'react-native';
import UserItem from '../Components/UserItem';
import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';

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
    const url = 'http://localhost:8080/api/userManager/listUser';
    this.setState({loading: true});
    axios.get(url, {
      headers: {
        'x-access-token': store.getState().currentUser.token
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

            <Container>
              <Content>
                <Spinner color='purple'/>
              </Content>
            </Container>

          ) : (
            <FlatList
              data = {this.state.employees}
              keyExtractor = {(item) => {return item._id.toString();}}
              renderItem={(data) => {return (<UserItem text={data.item.name}
                onPress={() => this.props.navigation.navigate('profile', {userId: data.item._id})}
              />);

              }}
            />
          )
        }
      </ScrollView>
    );
  }
}

export default ListScreen;
