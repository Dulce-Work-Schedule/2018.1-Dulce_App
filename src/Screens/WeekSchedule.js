import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import Modal from "react-native-modal";




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
    flex: 1,
    paddingTop: 30
  }
});



export default class WeekSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentSchedule: '',
      selectedSchedule: '',
      selectedStartTime: '',
      selectedFinalTime: '',
      currentStartTime: '',
      currentFinalTime: '',

      items: {
        '2017-05-15': [
          {
            date: '2017-05-15',
            employee: 'Maria',
            start_time: '08:30',
            end_time: '15:00',
            amount_of_hours: '6.5h',
            specialty: 'Médica'
          },
          {
            date: '2017-05-15',
            employee: 'José',
            start_time: '10:30',
            end_time: '17:30',
            amount_of_hours: '7.0h',
            specialty: 'Médico'
          },
          {
            date: '2017-05-15',
            employee: 'João',
            start_time: '14:30',
            end_time: '15:00',
            amount_of_hours: '0.5h',
            specialty: 'Médico'
          }
        ],
        '2017-05-16': [{
          date: '2017-05-16',
          employee: 'Gabriela',
          start_time: '08:30',
          end_time: '15:00',
          amount_of_hours: '6.5h',
          specialty: 'Médica'
        }],
        '2017-05-17': [{
          date: '2017-05-17',
          employee: 'Ezequiel',
          start_time: '10:30',
          specialty: 'Médico'
        }],
        '2017-05-18': [{
          date: '2017-05-18',
          employee: 'Outra pessoa',
          start_time: '14:30',
          end_time: '15:00',
          amount_of_hours: '0.5h',
          specialty: 'Médico'
        }]
      },
      selectedDay: '2017-05-15'
    };

  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  //Função para criar itens para o mês inteiro
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  _alert(employee, start_time, end_time){
    this.setState({currentSchedule: employee, currentStartTime: start_time, currentFinalTime: end_time});
    Alert.alert(
    'Mudar de Horário',
    'Deseja solicitar mudança de horário?',
    [
      {text: 'Sim', onPress: () => {this.setModalVisible(true)}},
      {text: 'Não', onPress: () => {}},
    ],
    { cancelable: true }
  )
  }

  alert_change(employee, start_time, end_time){
   this.setState({selectedSchedule: employee, selectedStartTime: start_time, selectedFinalTime: end_time}, () => {

    Alert.alert(
    'Mudar de Horário',
    this.state.currentSchedule + ': ' + this.state.currentStartTime + ' - ' + this.state.currentFinalTime + '\nPor\n' +
    this.state.selectedSchedule + ': ' + this.state.selectedStartTime + ' - ' + this.state.selectedFinalTime + '\nDeseja solicitar mudança de horário?',
    [
      {text: 'Sim', onPress: () => {this.setModalVisible(false)}},
      {text: 'Não', onPress: () => {}},
    ],
    { cancelable: true }
  )
});
}

  renderItem(item) {
    console.log(item);
    return (
      <TouchableHighlight onPress={() => {this._alert(item.employee, item.start_time, item.end_time)}} style={[styles.item, { height: item.height }]}>
      <View>
        <Text>{item.employee}</Text>
        <Text>{item.specialty}</Text>
        <Text>{item.start_time} - {item.end_time}</Text>
        <Text>{item.amount_of_hours}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderChangeItem(item) {
    console.log(item);
    return (
      <TouchableHighlight onPress={() => {this.alert_change(item.employee, item.start_time, item.end_time)}} style={[styles.item, { height: item.height }]}>
      <View>
        <Text>{item.employee}</Text>
        <Text>{item.specialty}</Text>
        <Text>{item.start_time} - {item.end_time}</Text>
        <Text>{item.amount_of_hours}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderModal(){
    return(<View>
    <Modal isVisible={this.state.modalVisible} backdropOpacity={0.2} style={{backgroundColor:'white'}} onBackdropPress={() => {this.setModalVisible(false)}}>
      <View style={{ flex: 1 }} >
      <Text>Selecione o Horário que Deseja solicitar troca</Text>
      <View style={{flex: 1}}>
      <Agenda
        style={{flex:1}}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={this.state.selectedDay}
        renderItem={this.renderChangeItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        theme={{
          calendarBackground: '#ffffff',
          agendaKnobColor: '#5f4b8b',
          selectedDayBackgroundColor: '#5f4b8b'
        }}
      />
      </View>
      </View>
    </Modal>
  </View>)
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
  render() {
    return (
        <View style={{flex: 1}}>
        <Agenda
        style={{flex:1}}
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={this.state.selectedDay}
          renderItem={this.renderItem.bind(this)}
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
          theme={{
            calendarBackground: '#ffffff',
            agendaKnobColor: '#5f4b8b',
            selectedDayBackgroundColor: '#5f4b8b'
          }}
        />
        {this.renderModal()}
        </View>
    );
  }
}
