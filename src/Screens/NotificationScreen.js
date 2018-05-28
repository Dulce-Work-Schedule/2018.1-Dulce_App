import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Button, Icon} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
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

  render() {
    return (
      <Container>
      <ScreenHeader
        title='Notificações'
      />
        <Content>
          <List dataArray={this.state.notifications}
            renderRow={(item) =>
              (<Card>
                <CardItem header>
                  <Text><Text style={{color: '#5f4b8b'}}>{item.name}</Text> solicitou mudança com o seu horário</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 1,flexDirection: 'column',alignItems: 'center'}}>
                        <Text>
                        Seu Horário
                        </Text>
                        <Text>
                          {item.currentDay}
                        </Text>
                        <Text>
                          {item.currentStartTime} - {item.currentEndTime}
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon name='md-arrow-dropright' style={{fontSize: 40, color: '#5f4b8b'}} />
                      </View>
                      <View style ={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Text>
                          {item.name}
                        </Text>

                        <Text>
                          {item.requestDay}
                        </Text>

                        <Text>
                          {item.requestStartTime} - {item.requestEndTime}
                        </Text>
                      </View>
                    </View>
                  </Body>
                </CardItem>
                <CardItem footer>

                  <View style={{flexDirection: 'row', marginLeft: 180}}>
                    <Button transparent onPress={() => {}}>
                      <Text style={{color: '#fd7d01'}}>Recusar</Text>
                    </Button>
                    <Button transparent onPress={() => {}}>
                      <Text style={{color: '#5f4b8b'}}>Aceitar</Text>
                    </Button>
                  </View>

                </CardItem>
              </Card>)
            } />
        </Content>
      </Container>
    );
  }
}
