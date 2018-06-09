import React from 'react';
import {View,Text} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import t from 'tcomb-form-native';
import {Container, CheckBox,ListItem,Body,Content,Header,Right,Radio} from 'native-base';
import SignUpButton from '../Components/SignUpButton';


const styles = {
    container: {
      justifyContent: 'center',
      marginTop: 10,
      padding: 15,
      backgroundColor: '#FFF'
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    item: {
      borderBottomWidth: 1
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };
  
  const Form = t.form.Form;
  
  class NewProfile extends React.Component {
    constructor(props) {
      super(props);
      this.Service = t.struct({
        nome: t.String,
        setor: t.String,
        matricula: t.String,
        hospital: t.String
      });
      this.state = {
        value: {
          nome: '',
          setor: '',
          matricula: '',
          hospital: ''
        }
      };
      this.options = {
        fields: {
          Nome: {
            error: 'Campo obrigatório'
          },
          Email: {
            error: 'Campo obrigatório'
          },
          senha: {
            secureTextEntry: true,
            error: 'Campo obrigatório'
          },
          confirmarSenha: {
            secureTextEntry: true,
            error: 'Campo obrigatório'
          }
        },
        stylesheet: formStyles
      };
    }

    radioButton(){
        return (
          <Container>
          <Content>
            <ListItem>
              <Text>Daily Stand Up</Text>
              <Right>
                <Radio selected={true} />
                <Radio selected={false} />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Discussion with Client</Text>
              <Right>
                <Radio selected={true} />
              </Right>
            </ListItem>
          </Content>
        </Container>
        );
    }
  
    onChange(value) {
      this.setState({value});
    }
  
    render() {
  
      return (
        <Container style={{backgroundColor: '#FFF'}}>
          <ScreenHeader title = 'Criar nova conta' />
          <View style={styles.container}>
            <Form
              ref='form'
              type={this.Service}
              value={this.state.value}
              options={this.options}
              onChange={(v) => this.onChange(v)}
            />
          </View>
          {this.radioButton()}
          {/* <View style={{flex: 1}}>
            <SignUpButton
              text = 'Cadastrar'
              onPress = {() => {}}
            />
          </View> */}
        </Container>
      );
    }
  }
  
  const formStyles = {
    ...Form.stylesheet,
    error: {
      color: 'red',
      fontSize: 14,
      marginBottom: 3,
      fontWeight: '600'
    }
  };

export default NewProfile;
