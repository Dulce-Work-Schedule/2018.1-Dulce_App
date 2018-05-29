import React from 'react';
import List from '../Components/List';

class SectorsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sectors: ['UTI','Pediatria','Centro de Internações','Salas cirúrgicas','Unidades de Hemodialise']
    };
  }

  _onPressButton() {
    this.props.navigation.navigate('doctors');
  }

  render() {
    return (
      <List
        onPress = {this._onPressButton.bind(this)}
        title='Setores'
        list = {this.state.sectors}
      />
    );
  }
}

export default SectorsScreen;
