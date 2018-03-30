import React from 'react';
import {View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
import AGRButton from '../Components/AGRButton';

const logo = require('../../assets/img/logo.png');


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
    backgroundColor: 'lightgray',
    padding: 10,
    width: 140,
    height:40,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10,
  },
  alinhar:{
    flexDirection:'row',
    alignContent:'space-around',
  }
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

  salvar(){
    this.setState({
      editable:false
    });
  }

  mostraDados(){
    return{textValue: ''};
  }

  atualizaDados(){
    this.setState({
      textValue: this.state.Textvalue
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Image source = {logo}/>
        <TextInput style={styles.input } Textvalue = {this.state.Textvalue}
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
        <View style={styles.alinhar}>
          <TouchableHighlight
          style= {styles.button}
          onPress={()=>{this.tornarVisivel()}}>
            <Text>Editar perfil</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style= {styles.button}
            onPress={()=>{this.salvar(), ()=>{this.atualizaDados()}}}

          >
            <Text>Salvar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


export default EditScreen;
