import React from 'react';
import {Container, Header, Content, List, ListItem, Text, Body, Title} from 'native-base';

class HospitalsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Hospitals: ['Hospital de Base','Hospital Regional de Taguatinga','Hospital da Ceilandia','Clínica']
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
          <List dataArray={this.state.Hospitals}
            renderRow={(item) =>
              <ListItem onPress={this.props.navigation.navigate('sectors')}>
                <Text>{item}</Text>
              </ListItem>
            } />
        </Content>
      </Container>
    );
  }
}

export default HospitalsScreen;
