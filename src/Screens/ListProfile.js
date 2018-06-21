import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Fab, Icon} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';
import {listProfile as styles} from './styles' ;

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

  navigateToNewProfile() {
    this.props.navigation.navigate('profile');
  }

  fab() {
    return (
      <Fab
        active={true}
        direction='up'
        containerStyle={{}}
        style={{backgroundColor: '#5f4b8b'}}
        position='bottomRight'
        onPress={() => {this.navigateToNewProfile();}}>
        <Icon type='MaterialIcons' name='add' />
      </Fab>);
  }

  renderCard(item) {
    return (
      <Card iconLeft>
        <CardItem style={styles.center} button onPress={() => {}}>
          <Body>
            <Text style={styles.colorPurple}>{item.name}</Text>
            <View style={{flexDirection: 'row',flex: 1}}>
              <Icon type='MaterialCommunityIcons' name='hospital-building'
                style={{padding: 10, fontSize: 40, color: '#5f4b8b'}}/>
              <View style= {{marginTop: 10}} >
                <Text> Setor: <Text style={styles.colorPurple}>{item.setor}</Text></Text>
                <Text> Matricula: <Text style={styles.colorPurple}>{item.matricula}</Text></Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={{flex: 8}}>
          <Container>
            <ScreenHeader
              title = 'Perfis'
            />
            <Content>
              <List dataArray={this.state.notifications}
                renderRow={(item) => (
                  this.renderCard(item))} />
            </Content>
          </Container>
          {this.fab()}
        </View>
      </View>
    );
  }
}
