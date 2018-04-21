import React from 'react';
import {Container, Header, Content, List, ListItem, Text, Title, Body} from 'native-base';

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
        <Header style={{backgroundColor: '#430082'}}>
          <Body>
             <Title>Hospitais</Title>
           </Body>
        </Header>
        <Content>
          <List>
            <ListItem style={{backgroundColor: '#a961ed'}} itemDivider>
              <Text style={{color: 'white'}}>Asa Norte</Text>
            </ListItem>
            <ListItem>
              <Text >Hospital de Base</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Regional</Text>
            </ListItem>
            <ListItem style={{backgroundColor: '#a961ed'}}itemDivider>
              <Text style={{color: 'white'}}>Gama</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Gama</Text>
            </ListItem>
            <ListItem style={{backgroundColor: '#a961ed'}} itemDivider>
              <Text style={{color: 'white'}}>Guará</Text>
            </ListItem>
            <ListItem>
              <Text>Hospital Guará</Text>
            </ListItem>
            <ListItem>
              <Text>UPA Guará</Text>
            </ListItem>
            <ListItem style={{backgroundColor: '#a961ed'}} itemDivider>
              <Text style={{color: 'white'}}>Taguatinga</Text>
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
