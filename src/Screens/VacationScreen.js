import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';
import ScreenHeader from '../Components/ScreenHeader';
import AGRButton from '../Components/AGRButton';
import {Icon} from 'native-base';

const XDate = require('xdate');

const styles = {
  title: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 15,
    color: '#5f4b8b',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  date: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 25,
    marginLeft: 5,
    color: '#5f4b8b'
    // underlayColor: '#5f4b8b'
  },
  dates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    borderColor: '#5f4b8b',
    borderWidth: 2,
    borderRadius: 5
  },
  justify: {
    flex: 1.5,
    backgroundColor: '#ede8f7',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderColor: '#5f4b8b',
    borderWidth: 2,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5f4b8b',
    width: 140,
    height: 40,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10
  },
  icon: {
    fontSize: 40,
    color: '#5f4b8b'
  },
  view1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    flex: 1,
    alignItems: 'center'
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
      endDay: endDay,
      justification: ''
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
            <View style={styles.view1}><Text style={styles.date}>{this.state.startDay.day}/{this.state.startDay.month}/{this.state.startDay.year}</Text></View>
            <View style={styles.view2}><Icon name='md-arrow-dropright-circle' style={styles.icon} /></View>
            <View style={styles.view3}><Text style={styles.date}>{this.state.endDay.day}/{this.state.endDay.month}/{this.state.endDay.year}</Text></View>
          </View>
          <View style={styles.justify}>
          <TextInput
            placeholder='Justificativa'
            maxLength = {350}
            multiline = {true}
            onChangeText={(justification) => this.setState({justification})}
            value={this.state.justification}
            underlineColorAndroid='transparent'
          />
          </View>
          <View style={{flex: 2}}>
          <AGRButton
            style={styles.button}
            onPress={() => {}}
            text='Escolher férias'
          />
          </View>
        </View>
      </View>
    );
  }
}
