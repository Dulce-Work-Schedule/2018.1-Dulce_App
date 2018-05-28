import React from 'react';
import {Container,Content, List, ListItem, Text} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';

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
        <ScreenHeader
          title='Setores'
        />
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
