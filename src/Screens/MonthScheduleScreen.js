import React from 'react';
import {View, Text, Image} from 'react-native';
import {Calendar, Arrow} from 'react-native-calendars';
import CalendarHeader from 'react-native-calendars';
import {Button} from 'native-base';

const styles = {
  text: {
    fontSize: 30,
    color: '#00F',
    marginRight: 20,
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#75027a',
    padding: 10
  },
  textHeader: {
    fontSize: 40,
    color: 'white',
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  day: {
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  button: {
    marginLeft: 300,
    backgroundColor: '#75027a'
  },
  imageEdit: {
    width: 45,
    height: 45
  }
};

class MonthScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_day: {
        dateString: ''
      },
      change_month: {
        month: ''
      }
    };
  }

  muda_data() {
    var dateString = new Date();
    dateString.toDateString('mm/dd/yyy');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Escala</Text>
        </View>
        <Calendar
          // Initially visible month. Default = Date()
          current={this.muda_data()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-05-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-05-31'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log('selected day', day);
            this.setState({selected_day: day});
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day);}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MM-yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
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

          pastScrollRange={24}
          futureScrollRange={24}
          style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
        />
        <View style={styles.day}>
          <Text style={styles.text}>{this.state.selected_day.dateString}</Text>
        </View>
        <View><Button rounded light style={styles.button}><Image style={styles.imageEdit} source={require('../../assets/img/editprofile.png')} /></Button></View>
      </View>
    );
  }
}

export default MonthScheduleScreen;
