import React from 'react';
import ListScreen from '../Components/ListScreen';

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
      <ListScreen
        title='Setores'
        list = {this.state.sectors}
        onPress = {this._onPressButton.bind(this)}
      />
    );
  }
}

export default SectorsScreen;
