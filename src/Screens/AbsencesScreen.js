import React from 'react';
import Absences from '../Components/Absences';
import ScreenHeader from '../Components/ScreenHeader';
import {View} from 'react-native';
import SideBar from '../Components/SideBar';

export default class AbsencesScreen extends React.Component {

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={{flex: 8}}>
          <ScreenHeader
            title='Abono'
          />
          <Absences
            type='complete'
            title='Selecione o período de abono'
          />
        </View>
      </View>
    );
  }
}
