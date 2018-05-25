import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, List, Button, Icon} from 'native-base';

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
        <Content>
          <List dataArray={this.state.notifications}
            renderRow={(item) =>
              (<Card>
                <CardItem header>
                  <Text><Text style={{color: 'purple'}}>{item.name}</Text> solicitou mudança com o seu horário</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                   Seu Horário                    {item.name}
                    </Text>
                    <Text>
                      {item.currentDay}         <Icon name='md-arrow-dropright' style={{fontSize: 40, color: 'purple'}} />         {item.requestDay}
                    </Text>
                    <Text>
                      {item.currentStartTime} - {item.currentEndTime}                 {item.requestStartTime} - {item.requestEndTime}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Button transparent onPress={() => {}}>
                    <Text>Aceitar</Text>
                  </Button>
                  <Button transparent danger onPress={() => {}}>
                    <Text>Recusar</Text>
                  </Button>
                </CardItem>
              </Card>)
            } />
        </Content>
      </Container>
    );
  }
}
