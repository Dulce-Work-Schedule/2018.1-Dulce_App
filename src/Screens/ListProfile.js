import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Fab, Icon} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';

const styles = {
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 68,
    justifyContent: 'center'
  },

  colorPurple: {
    color: '#5f4b8b',
    fontSize: 17,
    marginLeft: 5,
    fontFamily: 'Raleway'
  }
};
export default class ListProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name: 'Hospital Regional Do Gama',
          matricula: '123456',
          setor: 'Jimmy'
        },{
          name: 'Hospital Regional da Asa Norte',
          matricula: '160119553',
          setor: 'Fepas Beauty'
        }
      ]
    };
  }

  fab() {
    return (
    <Fab
       active={true}
      direction='up'
      containerStyle={{}}
      style={{backgroundColor: '#5f4b8b'}}
      position='bottomRight'
        onPress={() => {}}>
        <Icon type='MaterialIcons' name='add' />
    </Fab>);
  }

  renderCard(item) {
    return (
      <Card>
        <CardItem header><Text style={styles.colorPurple}>{item.name}</Text></CardItem>
        <CardItem style={styles.center} button onPress={() => {}}>
          <Body>
            <View >
              <Text> Setor: <Text style={styles.colorPurple}>{item.setor}</Text></Text>
              <Text> Matricula: <Text style={styles.colorPurple}>{item.matricula}</Text></Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <ScreenHeader
            title = 'Lista de Perfis'/>
          <Content>
            <List dataArray={this.state.notifications}
              renderRow={(item) => (
                this.renderCard(item))} />
          </Content>
        </Container>
        {this.fab()}
      </View>
    );
  }
}
