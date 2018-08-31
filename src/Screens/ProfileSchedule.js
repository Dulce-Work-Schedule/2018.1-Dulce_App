import React, {Component} from 'react';
import Schedule from '../Components/Schedule';
import store from '../Reducers/store';

export default class SectorSchedule extends Component {

  render() {
    return (
      <Schedule
        sector={false}
        title = 'Minha Escala'
        url = {'http://18.228.71.197:8083/api/schedule/listYearByProfile?profile_id=' +
        store.getState().currentProfile.id}
      />
    );
  }
}
