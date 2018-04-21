import React from 'react';
import {Container, Header, Content, List, ListItem, Text, Title} from 'native-base';
import {ScrollView} from 'react-native';

class HospitalsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hospitals: {}
    };
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'purple'}}>
          <Title>Hospitais</Title>
        </Header>
        <Content>
          <List>
            <ListItem style={{backgroundColor: '#6e42f4'}} itemDivider>
              <Text>Asa Norte</Text>
            </ListItem>
            <ListItem >
              <Text>Hospital de Base</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Regional</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Gama</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Gama</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Guará</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Guará</Text>
            </ListItem>
            <ListItem>
              <Text>UPA Guará</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Taguatinga</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Taguatinga</Text>
            </ListItem>
            <ListItem>
              <Text>UPA Taguatinga</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default HospitalsScreen;
