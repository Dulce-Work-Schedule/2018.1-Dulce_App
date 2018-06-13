import React from 'react';
import Absences from '../Components/Absences';
import ScreenHeader from '../Components/ScreenHeader';
import {View} from 'react-native';

export default class VacationScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title='Férias'
        />
        <Absences
          type='vacation'
          title='Selecione o período de férias'
        />
      </View>
    );
  }
}
