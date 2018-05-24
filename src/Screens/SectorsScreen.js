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
        <Header style={{backgroundColor: '#5f4b8b'}}>
          <Body>
            <Title>Setores</Title>
          </Body>
        </Header>
        <Content>
          <List dataArray={this.state.sectors}
            renderRow={(item) =>
              (<ListItem onPress={() => this.props.navigation.navigate('doctors')}>
                <Text>{item}</Text>
              </ListItem>)
            } />
        </Content>
      </Container>
    );
  }
}

export default SectorsScreen;
