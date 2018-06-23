import React, {Component} from 'react';
import Schedule from '../Components/Schedule';

export default class WeekSchedule extends Component {

  render() {
    return (
      <Schedule
      sector={true}
      title = 'titulo'
      url = 'http://18.231.80.185:8083/api/schedule/listYearByProfile?profile_id=5b2d6fa1415965001ddaa5dd&year=2018'
      />
    );
  }
}
