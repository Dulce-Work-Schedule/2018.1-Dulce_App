import React, {Component} from 'react';
import {CalendarList} from 'react-native-calendars';


export default class HolidayScreen extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <CalendarList
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={0}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={true}
        markedDates={
        {'2018-06-20': {textColor: 'green'},
          '2018-06-22': {startingDay: true, color: 'green'},
          '2018-06-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
          '2018-06-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
        }}
        markingType={'period'}
      />

    );
  }
}
