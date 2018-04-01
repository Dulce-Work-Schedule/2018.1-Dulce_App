import React from 'react';
import{View,
      Text,
      FlatList,
      Button,
      TouchableHighlight} from 'react-native';
import AGRButton from '../Components/AGRButton';

const styles = {
 principal:{
    flex: 1,
    flexDirection: 'column',
    paddin: 15,
    paddingHorizontal: 50,
    marginTop: 30,
 },
 informacoes: {

    marginBottom: 50

 }
 }


class ProfileManager extends React.Component {

    constructor(props){
      super(props);
        this.state = {
          perfilGestor: [],
          loading: true

        }

}

componentDidMount(){

const url = 'https://jsonplaceholder.typicode.com/users';
this.setState({loading: true});
fetch(url)
.then((response) => {return response.json();})
.then((json) => { this.setState ({perfilGestor: json , loading: false})})
}

  render(){
      return(
        <View style={styles.principal}>
          {
              this.state.loading ? (<View />):(<View>
                <Text>{this.state.perfilGestor[0].name}</Text>
                <Text>{this.state.perfilGestor[0].email}</Text>
                <Text>{this.state.perfilGestor[0].address.street}</Text>
                <Text>{this.state.perfilGestor[0].address.zipcode}</Text>
                <Text>{this.state.perfilGestor[1].address.street}</Text>
                <Text>Cargo:Gestor</Text>
              </View>)

          }


          <AGRButton
          text='Editar Perfil'
          onPress = {() => this.props.navigation.navigate('users')}
          />


          <TouchableHighlight >
              <Text>alterar senha</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

export default ProfileManager;
