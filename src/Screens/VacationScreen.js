import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';
import ScreenHeader from '../Components/ScreenHeader';
import AGRButton from '../Components/AGRButton';
import {Card, CardItem, Text, Body, Form, Textarea} from 'native-base';
import styles from '../Styles/styles';

const XDate = require('xdate');

const currentDay = {
  year: new XDate().getFullYear(),
  month: new XDate().getMonth() + 1,
  day: new XDate().getDate()
};

export default class VacationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDay: currentDay,
      endDay: currentDay
    };
  }

  onSelectDates(startDay, endDay) {
    this.setState({
      startDay: startDay,
      endDay: endDay
    });
  }

  renderCard() {
    return (
      <View style={styles.container1}>
        <Card>
          <CardItem header bordered>
            <View style={styles.view1}>
              <Text style={styles.date}>
                {this.state.startDay.day}/{this.state.startDay.month}/
                {this.state.startDay.year} até {this.state.endDay.day}/{this.state.endDay.month}/{this.state.endDay.year}
              </Text>
            </View>
          </CardItem>
          <CardItem>
            <Body>
              <Form style={styles.form}>
                <Textarea rowSpan={5} bordered placeholder='Justificativa' />
              </Form>
            </Body>
          </CardItem>

          <CardItem footer>
            <AGRButton style={styles.button} onPress={() => {}} text='Selecionar' />
          </CardItem>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
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
        {this.renderCard()}
      </ScrollView>
    );
  }
}
