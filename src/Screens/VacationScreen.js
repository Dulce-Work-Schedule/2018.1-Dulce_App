import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';
import ScreenHeader from '../Components/ScreenHeader';
import AGRButton from '../Components/AGRButton';

const XDate = require('xdate');

const styles = {
  title: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  date: {
    color: '#5f4b8b',
    fontSize: 25
  },
  dates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  justify: {
    flex: 2,
    backgroundColor: 'red'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
};

export default class VacationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDay: {
        year: new XDate().getFullYear(),
        month: new XDate().getMonth() + 1,
        day: new XDate().getDate()
      },
      endDay: {
        year: new XDate().getFullYear(),
        month: new XDate().getMonth() + 1,
        day: new XDate().getDate()
      }
    };
  }

  onSelectDates(startDay, endDay) {
    this.setState({
      startDay: startDay,
      endDay: endDay
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title='Férias'
        />
        <Text style={styles.title}>
              Selecione o período de férias desejado
        </Text>
        <DateRangePicker
          onSuccess={(startDay, endDay) => this.onSelectDates(startDay, endDay)}
          theme={{markColor: '#5f4b8b', markTextColor: 'white'}}
        />
        <View style={styles.container}>
          <View style={styles.dates}>
            <Text style={styles.date}>Data de inicio: {this.state.startDay.day}/{this.state.startDay.month}/{this.state.startDay.year} </Text>
            <Text style={styles.date}>fim: {this.state.endDay.day}/{this.state.endDay.month}/{this.state.endDay.year}</Text>
          </View>
          <View style={styles.justify}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          />
          </View>
          <View style={styles.button}>
          <AGRButton
            onPress={() => {}}
            text='Escolher férias'
          />
          </View>
        </View>
      </View>
    );
  }
}
