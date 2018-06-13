import React from 'react';
import Absences from '../Components/Absences';
import ScreenHeader from '../Components/ScreenHeader';
import {View} from 'react-native';

export default class AbsencesScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title='Abono'
        />
        <Absences
          type='complete'
          title='Selecione o período de abono'
        />
      </View>
    );
  }
}
