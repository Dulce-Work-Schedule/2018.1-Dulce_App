import React, {Component} from 'react';
import Schedule from '../Components/Schedule';

export default class SectorSchedule extends Component {

  render() {
    return (
      <Schedule
        sector={true}
        title = 'Escalas do Setor'
        url = 'http://18.231.80.185:8083/api/schedule/listYearBySector?sector_id=123456789123456789123456'
      />
    );
  }
}
