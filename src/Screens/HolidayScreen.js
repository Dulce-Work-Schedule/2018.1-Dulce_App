import React, {Component} from 'react';
import {CalendarList} from 'react-native-calendars';
export default class HolidayScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startingDate: new Date(),
      endingDate: new Date()
    };
  }

  _onPress(day) {
    if (this.state.startingDate.getFullYear() === 1998) {
      this.setState({startingDate: day}, () => {
        console.log('start');
        console.log(this.state.startingDate.dateString.getFullYear());
      }
            );
    } else {
      this.setState({endingDate: day.dateString}, () => {
        console.log('end: ', this.state.endingDate);
      });
    }

  }

  render() {
    return (
            <CalendarList
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                pastScrollRange={0}
                futureScrollRange={12}
                onDayPress={(day) => { this._onPress(day);} }
                scrollEnabled={true}
                showScrollIndicator={true}
                selected={this.state.startingDay}
                markedDates = {
                {
                  '2012-05-20': {textColor: 'green'},
                  '2012-05-22': {startingDay: true, color: 'green'},
                  '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                  '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                }
                }
                markingType = { 'period'}
            />
    );
  }
}
