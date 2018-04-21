import React from 'react';
import {Container, Header, Content, List, ListItem, Text, Body, Title} from 'native-base';

class SectorsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sectors: ['UTI','Pediatria','Centro de Internações','Salas cirúrgicas','Unidades de Hemodialise']
    };
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#430082'}}>
          <Body>
             <Title>Setores</Title>
           </Body>
        </Header>
        <Content>
          <List dataArray={this.state.sectors}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            } />
        </Content>
      </Container>
    );
  }
}

export default SectorsScreen;
