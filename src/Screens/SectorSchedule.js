import React, {Component} from 'react';
import Schedule from '../Components/Schedule';
import store from '../Reducers/store';

export default class SectorSchedule extends Component {

  render() {
    return (
      <Schedule
        sector={true}
        title = 'Escalas do Setor'
        url = {'http://18.228.71.197:8083/api/schedule/listYearBySector?sector_id=' +
        store.getState().currentProfile.sector_id}
      />
    );
  }
}
