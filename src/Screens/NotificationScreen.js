import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Card, CardItem, Body, List, Icon, Toast} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import ValidateButton from '../Components/ValidateButton';
import SideBar from '../Components/SideBar';
import {notificationScreen as styles} from './styles' ;

export default class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name: 'Guilherme',
          currentDay: '2018-04-28',
          currentStartTime: '10:30',
          currentEndTime: '12:00',
          requestDay: '2018-05-12',
          requestStartTime: '10:30',
          requestEndTime: '12:00'
        },{
          name: 'Ezequiel',
          currentDay: '2018-04-28',
          currentStartTime: '10:30',
          currentEndTime: '12:00',
          requestDay: '2018-03-30',
          requestStartTime: '10:30',
          requestEndTime: '12:00'
        }
      ]
    };
  }

  in_construction() {
    Toast.show({
      text: 'Funcionalidade não disponivel'});
  }

  renderCard(item) {
    return (
      <Card>
        <CardItem header><Text style={styles.text} ><Text style={styles.colorPurple}>{item.name}</Text> solicitou mudança com o seu horário</Text></CardItem>
        <CardItem>
          <Body>
            <View style={styles.view1}>
              <View style={styles.view2}>
                <Text style={styles.text} >Seu Horário</Text><Text style={styles.text} >{item.currentDay}</Text><Text style={styles.text} >{item.currentStartTime} - {item.currentEndTime}</Text>
              </View>
              <View style={styles.view3}><Icon name='md-arrow-dropright' style={styles.icon} /></View>
              <View style ={styles.view4}>
                <Text style={styles.text} >{item.name}</Text><Text style={styles.text} >{item.requestDay}</Text><Text style={styles.text} >{item.requestStartTime} - {item.requestEndTime}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
        <CardItem footer>
          <View style={styles.buttonView}>
            <ValidateButton text='Recusar' textStyle={styles.colorOrange}
              onPress={ () => this.in_construction()}/>
            <ValidateButton text='Aceitar' textStyle={styles.colorPurple} onPress = {() => this.in_construction()}/>
          </View>
        </CardItem>
      </Card>);}

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <Container style={{flex: 8}}>
          <ScreenHeader
            title = 'Notificações'
          />
          <Content>
            <List dataArray={this.state.notifications}
              renderRow={(item) => (
                this.renderCard(item)
              )
              } />
          </Content>
        </Container>
      </View>
    );
  }
}
