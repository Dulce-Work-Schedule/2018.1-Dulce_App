import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, List, Button } from 'native-base';

export default class CardHeaderFooterExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name:"Guilherme",
          currentDay:"2018-04-28",
          currentStartTime:"10:30",
          currentEndTime:"12:00",
          requestDay: "2018-05-12",
          requestStartTime:"10:30",
          requestEndTime:"12:00"
        },{
          name:"Ezequiel",
          currentDay:"2018-04-28",
          currentStartTime:"10:30",
          currentEndTime:"12:00",
          requestDay:"2018-03-30",
          requestStartTime:"10:30",
          requestEndTime:"12:00"
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
          <Card>
            <CardItem header>
              <Text>{item.name} solicitou mudança com o seu horário</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {item.currentDay} : {item.currentStartTime} - {item.currentEndTime}
                </Text>
                <Text>
                  {item.requestDay} : {item.requestStartTime} - {item.requestEndTime}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
            <Button transparent>
            <Text>Sim</Text>
            </Button>
            <Button transparent danger>
            <Text>Não</Text>
            </Button>
            </CardItem>
         </Card>
       }>
       </List>
        </Content>
      </Container>
    );
  }
}
