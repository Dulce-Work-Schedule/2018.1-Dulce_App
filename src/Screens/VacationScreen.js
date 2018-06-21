import React from 'react';
import Absences from '../Components/Absences';
import ScreenHeader from '../Components/ScreenHeader';
import {View} from 'react-native';
import SideBar from '../Components/SideBar';

export default class VacationScreen extends React.Component {

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={{flex: 8}}>
          <ScreenHeader
            title='Férias'
          />
          <Absences
            type='vacation'
            title='Selecione o período de férias'
          />
        </View>
      </View>
    );
  }
}
