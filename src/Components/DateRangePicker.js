import React, {Component} from 'react';
import {Calendar} from 'react-native-calendars';

const XDate = require('xdate');

export default class DateRangePicker extends Component {

  state = {isFromDatePicked: false, isToDatePicked: false, markedDates: {}}

  onDayPress(day) {
    var range = -1;
    if (!this.state.isToDatePicked && this.state.isFromDatePicked) {
      let markedDates = {...this.state.markedDates};
      let mMarkedDates = 0;
      [mMarkedDates, range] = this.setupMarkedDates(this.state.fromDate.dateString, day.dateString, markedDates);
      if (range >= 0) {
        this.setState({isFromDatePicked: true, isToDatePicked: true, markedDates: mMarkedDates});
        this.props.onSuccess(this.state.fromDate, day);
      }
    }
    if ((this.state.isFromDatePicked && this.state.isToDatePicked) || !this.state.isFromDatePicked || (range < 0)) {
      this.setupStartMarker(day);
    }
  }

  setupStartMarker(day) {
    let markedDates = {[day.dateString]: {startingDay: true, color: this.props.theme.markColor, textColor: this.props.theme.markTextColor}};
    this.setState({isFromDatePicked: true, isToDatePicked: false, fromDate: day, markedDates: markedDates});
  }

  setupMarkedDates(fromDate, toDate, markedDates) {
    let mFromDate = new XDate(fromDate);
    let mToDate = new XDate(toDate);
    let range = mFromDate.diffDays(mToDate);
    if (range === 0) {
      markedDates.prop = {[toDate]: {color: this.props.theme.markColor, textColor: this.props.theme.markTextColor}};
    } else if (range > 0) {
      for (var i = 1; i <= range; i++) {
        let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
        if (i < range) {
          markedDates[tempDate] = {color: this.props.theme.markColor, textColor: this.props.theme.markTextColor};
        } else {
          markedDates[tempDate] = {endingDay: true, color: this.props.theme.markColor, textColor: this.props.theme.markTextColor};
        }
      }
    }

    console.log(markedDates);
    return [markedDates, range];
  }

  render() {
    return (
      <Calendar {...this.props}
        markingType={'period'}
        current={this.state.fromDate}
        markedDates={this.state.markedDates}
        onDayPress={(day) => {this.onDayPress(day);}}/>
    );
  }
}

DateRangePicker.defaultProps = {
  theme: {markColor: '#00adf5', markTextColor: '#ffffff'}
};
