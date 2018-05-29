import React from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {View} from 'react-native';
import ListScreen from '../Components/ListScreen';
class HospitalsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Hospitals: ['Hospital de Base','Hospital Regional de Taguatinga','Hospital da Ceilandia','Clínica']
    };
  }

  onPressItem() {
    this.props.navigation.navigate('sectors');
  }

  render() {
    return (
      <ListScreen
      title='Hospitais'
      list = {this.state.Hospitals}
      onPress={this.onPressItem.bind(this)}
      />
    );
  }
}

export default HospitalsScreen;
