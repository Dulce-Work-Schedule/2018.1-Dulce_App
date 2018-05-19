import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Modal from 'react-native-modal';
import {Spinner, Content} from 'native-base';
import axios from 'axios';
import store from '../Reducers/store';

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
      currentSchedule: {},
      selectedSchedule: {},
      items: {},
      loading: true
    };

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  componentDidMount(){
    var date = new Date();
    const url = 'http://localhost:8091/api/schedule/listMonth/?day=' + date.getMonth() + '&id=' + store.getState().currentUser.id
    axios.get(url,{
      headers:{
        'x-access-token': store.getState().currentUser.token
      }
    })
    .then((response)=>{
      this.setState({items: response.data, loading: false})
      console.log(items)
    })
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2012-03-01'}
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
          selectedDayBackgroundColor:'#5f4b8b'
        }}
      />
    );
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

  requestChange() {
    this.setModalVisible(false);
    Alert.alert(
      'Pedido de Alteração',
      'Solicitação de alteração de horário feita com sucesso!'
    );
  }

  _alert(employee) {
    this.setState({currentSchedule: employee});
    Alert.alert(
      'Mudar de Horário',
      'Deseja solicitar mudança de horário?',
      [
        {text: 'Sim', onPress: () => { this.setModalVisible(true); }},
        {text: 'Não', onPress: () => {}}
      ],
      {cancelable: true}
    );
  }

  alert_change(employee) {
    this.setState({selectedSchedule: employee}, () => {

      Alert.alert(
        'Mudar de Horário',
        this.state.currentSchedule.employee + ', deseja trocar de horario com o/a ' + this.state.selectedSchedule.employee + '?\n\n ' +
        this.state.currentSchedule.date + '    ->   ' + this.state.selectedSchedule.date + '\n' + this.state.currentSchedule.start_time + ' - ' + this.state.currentSchedule.end_time + '  ->  ' + this.state.selectedSchedule.start_time + ' - ' + this.state.selectedSchedule.end_time,
        [
          {text: 'Sim', onPress: () => {this.requestChange();}},
          {text: 'Não', onPress: () => { }}
        ],
        {cancelable: true}
      );
    });
  }

  renderItem(item) {
    console.log(item);
    return (
      <TouchableHighlight onPress={() => {this._alert(item);}} underlayColor='purple' style={[styles.item, {height: item.height}]}>
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
      <TouchableHighlight onPress={() => { this.alert_change(item); }} underlayColor='purple' style={[styles.item, {height: item.height}]}>
        <View>
          <Text>{item.employee}</Text>
          <Text>{item.specialty}</Text>
          <Text>{item.start_time} - {item.end_time}</Text>
          <Text>{item.amount_of_hours}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderModal() {
    return (
      <View>
        <Modal isVisible={this.state.modalVisible} backdropOpacity={0.2} style={{backgroundColor: 'white'}} onBackdropPress={() => { this.setModalVisible(false); }}>
          <View style={{flex: 1}} >
            <Text style={{margin: 5, alignSelf: 'center'}}>Selecione o Horário que Deseja solicitar troca</Text>
            <View style={{flex: 1}}>
              {this.renderAgenda(this.renderChangeItem)}
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  renderAgenda(item) {
    return (
      <Agenda
        style={{flex: 1}}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={this.state.selectedDay}
        renderItem={item.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        theme={{
          calendarBackground: '#ffffff',
          agendaKnobColor: '#5f4b8b',
          selectedDayBackgroundColor: '#5f4b8b'
        }}
      />
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

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderAgenda(this.renderItem)}
        {this.renderModal()}
      </View>
    );
  }
}
