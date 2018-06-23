import React, {Component} from 'react';
import {Text,View,TouchableHighlight,Alert} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Modal from 'react-native-modal';
import axios from 'axios';
import ScreenHeader from '../Components/ScreenHeader';
import ScheduleItem from '../Components/ScheduleItem';
import SideBar from '../Components/SideBar';
import {Icon, Fab} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {weekSchedule as styles} from '../Screens/styles' ;
import store from '../Reducers/store';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
      selfChange: false,
      modalVisible: false,
      currentSchedule: {},
      selectedSchedule: {},
      items: {},
      loading: true,
      selectedDay: new Date(),
      itemDate: [],
      changeDay: new Date(),
      dateString: {},
      finalDateString: new Date()
    };
  }

  componentDidMount() {
    const url = this.props.url;
    axios.get(url)
      .then((response) => {
        this.setState({itemDate: response.data, loading: false});
        console.log(response.data);
        console.log(this.state.itemDate);
        this.arrayToObject();
        if (response.data === []) {
          Alert.alert(
            'Erro',
            'Não há horários criados!');}
      })
      .catch(() => {
        Alert.alert(
          'Erro',
          'Verifique sua conexão.');
      });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  timePickerVisible(visible) {
    this.setState({isDateTimePickerVisible: visible});
  }

  fab() {
    return (
      <Fab
        active={false}
        direction='up'
        containerStyle={{}}
        style={{backgroundColor: '#5f4b8b'}}
        position='bottomRight'
        onPress={() => { this.timePickerVisible(true); }}>
        <Icon type='MaterialIcons' name='edit' />
      </Fab>);
  }

  showEndDateTimePicker(date) {
    this.setState({
      endDateTimePickerVisible: true,
      changeDay: date});
  }

  hideEndDateTimePicker() {
    this.setState({endDateTimePickerVisible: false});
  }

  timePicker() {
    return (
      <DateTimePicker
        isVisible={this.state.isDateTimePickerVisible}
        onConfirm={(date) => this.showEndDateTimePicker(date)}
        onCancel={() => {this.timePickerVisible(false);}}
        mode='datetime'
        style={{backgroundColor: '#5f4b8b', borderColor: '#5f4b8b', underlayColor: '#5f4b8b'}}/>);
  }

  finalPicker() {
    return (
      <DateTimePicker
        isVisible={this.state.endDateTimePickerVisible}
        onConfirm={(date) => this.alert_Selfchange(date)}
        onCancel={() => {this.timePickerVisible(false);this.hideEndDateTimePicker();}}
        mode='time'
        style={{backgroundColor: '#5f4b8b', borderColor: '#5f4b8b', underlayColor: '#5f4b8b'}}/>);
  }
  arrayToObject() {
    const newObj = this.state.itemDate.reduce((acc, cur) => {
      var date = new Date(cur.start_time);
      var format = (date.getFullYear() + '-' +
        (date.getMonth() + 1).toString().padStart(2, 0) + '-' +
        (date.getDate()).toString().padStart(2, 0));
      if (!acc[format]) {
        acc[format] = [];
      }
      acc[format].push(cur);
      return acc;
    }, {});
    this.setState({items: newObj});
    console.log(this.state.items);
  }
  //Função para criar itens para o mês inteiro
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  requestChange() {
    this.hideEndDateTimePicker();
    this.timePickerVisible(false);
    this.setModalVisible(false);
    Alert.alert(
      'Pedido de Alteração',
      'Solicitação de alteração de horário feita com sucesso!');
  }

  _alert(employee) {
    this.setState({currentSchedule: employee});
    Alert.alert(
      'Mudar de Horário',
      'Deseja solicitar mudança de horário?',
      [
        {text: 'Não', onPress: () => { }},
        {text: 'Sim', onPress: () => this.props.sector ? this.setModalVisible(true) : this.timePickerVisible(true)}
      ],
      {cancelable: true});
  }

  alert_change(employee) {
    this.setState({selectedSchedule: employee}, () => {
      Alert.alert(
        'Mudar de Horário',
        this.state.currentSchedule.employee + ', deseja trocar de horario com o/a ' +
        this.state.selectedSchedule.employee + '?\n\n ' +
        this.state.currentSchedule.date + '    ->   ' + this.state.selectedSchedule.date +
        '\n' + this.state.currentSchedule.start_time + ' - ' + this.state.currentSchedule.end_time +
        '  ->  ' + this.state.selectedSchedule.start_time + ' - ' + this.state.selectedSchedule.end_time,
        [
          {text: 'Não', onPress: () => { }},
          {text: 'Sim', onPress: () => {this.requestChange();}}
        ],
        {cancelable: true});});
  }

  alert_Selfchange(date) {
    this.setState({finalDateString: date});
    if (!this.state.finalDateString) {
      this.setState({finalDateString: new Date()});
    }

    Alert.alert(
      'Mudar de Horário',
      store.getState().currentUser.firstName + ', deseja trocar de horario' + '?\n\n ' +
      this.state.currentSchedule.date + '    ->   ' +
      (this.state.changeDay.getMonth() + 1).toString().padStart(2 , 0) + '/' +
      (this.state.changeDay.getDate()).toString().padStart(2,0) + '/' +
      this.state.changeDay.getFullYear() + '\n' + this.state.currentSchedule.start_time +
       ' - ' + this.state.currentSchedule.end_time + '  ->  ' +
      (this.state.changeDay.getHours()).toString().padStart(2 , 0) + ':' +
      (this.state.changeDay.getMinutes()).toString().padStart(2,0) + ' - ' +
      (this.state.finalDateString.getHours()).toString().padStart(2,0) + ':' +
      (this.state.finalDateString.getMinutes()).toString().padStart(2,0),
      [
        {text: 'Não', onPress: () => {this.timePickerVisible(false);this.hideEndDateTimePicker();}},
        {text: 'Sim', onPress: () => {this.requestChange(); }}
      ],
      {cancelable: true});
  }

  renderItem(item) {
    return (
      <ScheduleItem
        isSector={this.props.sector}
        item={item}
        onPress={() => { this._alert(item); }}/>);
  }
  renderChangeItem(item) {
    return (
      <ScheduleItem
        isSector={this.props.sector}
        onPress={() => { this.alert_change(item); }}
        item={item}/>);
  }
  renderModal() {
    return (
      <View>
        <Modal isVisible={this.state.modalVisible} backdropOpacity={0.2}
          style={{backgroundColor: 'white'}} onBackdropPress={() => { this.setModalVisible(false); }}>
          <View style={{flex: 1}} >
            <Text style={{margin: 5, alignSelf: 'center', fontSize: 15}}>
            Selecione o Horário que Deseja solicitar troca</Text>
            <View style={{flex: 1}}>
              {this.renderAgenda(this.renderChangeItem)}

            </View>
            {this.cancelChange()}
          </View>
        </Modal>
      </View>);
  }
  cancelChange() {
    return (
      <TouchableHighlight onPress={() => { this.setModalVisible(false); }}
        style={{backgroundColor: '#5f4b8b'}}>
        <Text style={{margin: 5, alignSelf: 'center', fontSize: 18, color: 'white'}}>
          Cancelar
        </Text>
      </TouchableHighlight>);
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
        onDayChange={(day) => { this.setState({dateString: day});}}
        onDayPress={(day) => { this.setState({dateString: day});}}
        theme={{
          calendarBackground: '#ffffff',
          agendaKnobColor: '#5f4b8b',
          selectedDayBackgroundColor: '#5f4b8b'}}/>);
  }
  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Nenhuma escala neste dia!</Text></View>);
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
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <View style={{flex: 8}}>
          <ScreenHeader
            title={this.props.title}
          />
          {this.renderAgenda(this.renderItem)}
          {this.renderModal()}
          {this.timePicker()}
          {this.finalPicker()}
        </View>
      </View>
    );
  }
}
