import React from 'react';
import {View, Text} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import Router from '../Components/routes'


const styles = {
  text: {
    fontSize: 30,
    color: '#00F' ,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  calendar: {
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#8a2be2',
    padding: 10
  },
  textHeader: {
    fontSize: 40,
    color: 'white',
    textAlign: 'left',
    textAlignVertical: 'center',
    marginLeft: 70
  }
};

class MonthScheduleScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected_day: {
        dateString: ''
      }
    };
  }
  render() {
    return (
      <View>
        <Router />
        <View style={styles.header}>
            <Text style={styles.textHeader}>Escala</Text>
        </View>
        <Calendar style={styles.calendar}
          // Initially visible month. Default = Date()
          current={Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-05-15'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log('selected day', day)
            this.setState({selected_day: day})
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={() => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          calendarHeight= {10}
          calendarWidtdh = {10}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(left) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={7}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <View>
        <Text style={styles.text}>{this.state.selected_day.dateString}</Text>
        </View>
      </View>
    );
  }
}


export default MonthScheduleScreen;
