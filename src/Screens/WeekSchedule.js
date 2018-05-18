import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class WeekSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2017-05-15': [
          {date:'2017-05-15', employee: "João", start_time: "14:30", end_time: "15:00", amount_of_hours: "0.5h", specialty: "EPS" },
          {date:'2017-05-15', employee: "Maria", start_time: "14:30", end_time: "15:00", amount_of_hours: "0.5h", specialty: "EPS" },
          {date:'2017-05-15', employee: "José", start_time: "14:30", end_time: "15:00", amount_of_hours: "0.5h", specialty: "EPS" }
        ],
        '2017-05-16': [{date:'2017-05-16',employee: 'q', start_time: 'q', end_time: 'q', amount_of_hours: 'q', specialty: 'q' }],
        '2017-05-17': [{date:'2017-05-17',employee: 'w', start_time: 'w', end_time: 'w', amount_of_hours: 'w', specialty: 'w' }],
        '2017-05-18': [{date:'2017-05-18',employee: 'e', start_time: 'e', end_time: 'e', amount_of_hours: 'e', specialty: 'e' }]
      },
      selectedDay: '2017-05-15'
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        //loadItemsForMonth={this.loadItems.bind(this)}
        selected={this.state.selectedDay}
        renderItem={this.renderItem.bind(this)}
        // for (var i = 1; i <= this.length; i++) {
        // }
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        //markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        //  monthFormat={'yyyy'}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        theme={{calendarBackground: 'white', agendaKnobColor: 'purple'}}
      />
    );
  }

//Função para carregar somente os itens da lista da data selecionada
  // loadItems(day) {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = this.timeToString(time);
  //       if (!this.state.items[strTime]) {
  //         this.state.items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 5);
  //         for (let j = 0; j < numItems; j++) {
  //           this.state.items[strTime].push({
  //             name: 'Item for ' + strTime,
  //             height: Math.max(50, Math.floor(Math.random() * 150))
  //           });
  //         }
  //       }
  //     }
  //     //console.log(this.state.items);
  //     const newItems = {};
  //     Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
  //     this.setState({
  //       items: newItems
  //     });
  //   }, 1000);
  //   // console.log(`Load Items for ${day.year}-${day.month}`);
  // }

  renderItem(item) {
    console.log(item);
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text>{item.employee}</Text>
        <Text>{item.specialty}</Text>
        <Text>{item.start_time} - {item.end_time}</Text>
        <Text>{item.amount_of_hours}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
