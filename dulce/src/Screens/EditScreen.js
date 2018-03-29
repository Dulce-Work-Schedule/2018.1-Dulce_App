import React from 'react';
import {View, TextInput, Text} from 'react-native';
import AGRButton from '../Components/AGRButton';


const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  input:{
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    color: 'blue'
  },
};

class EditScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {editable:false};
  }

  tornarVisivel(){
    this.setState({
      editable: !this.state.editable
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Nome'
          editable = {this.state.editable}
        />
        <TextInput style={styles.input}
          placeholder='Matricula'
          editable = {this.state.editable}
        />
        <TextInput style={styles.input}
          placeholder='Hospital'
          editable = {this.state.editable}
        />
        <TextInput style={styles.input}
          placeholder='Setor'
          editable = {this.state.editable}
        />
        <TextInput style={styles.input}
          placeholder='Editar senha'
          editable = {this.state.editable}
        />
        <AGRButton
          text ="Editar perfil"
          style={styles.button}
          onPress={() => {this.tornarVisivel()}}
        />

      </View>
    );
  }
}


export default EditScreen;
