import React from 'react';
import {View, TextInput, Text} from 'react-native';
import AGRButton from '../Components/AGRButton';


const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
  },
  input:{
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    color: 'blue'
  },
};

class EditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Nome'
          editable = 'false'
        />
        <TextInput style={styles.input}
          placeholder='Matricula'
          editable = 'false'
        />
        <TextInput style={styles.input}
          placeholder='Hospital'
          editable = 'false'
        />
        <TextInput style={styles.input}
          placeholder='Setor'
          editable = 'false'
        />
        <TextInput style={styles.input}
          placeholder='Editar senha'
          editable = 'false'
        />
        <AGRButton
          text ="Editar perfil"
          style={styles.button}
          onPress = {() => this.setState({editable:true})}
        >
        </AGRButton>
      </View>
    );
  }
}


export default EditScreen;
