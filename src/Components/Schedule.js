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
      currentEmployee: '',
      selectedEmployee: '',
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

  axiosProfile(profile_id, selected) {
    const url = 'http://18.231.9.190:8083/api/profile/view/?profile_id=' + profile_id;
    console.log(url);
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      var user_id = response.data.user_id;
      this.axiosUser(user_id, selected);
    });
  }

  axiosUser(user_id, selected) {
    const url = 'http://54.233.119.148:8083/api/user/listById?id=' + user_id;
    console.log(url);
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      console.log(response.data);
      var name = response.data.firstName + ' ' + response.data.lastName;
      console.log(name);
      if (selected) {
        this.setState({selectedEmployee: name}, () => {
          this.alert_change();
        });
      } else {
        this.setState({currentEmployee: name}, () => {
          this.axiosProfile(this.state.selectedSchedule.profile_id, true);
        });
      }
    });
  }

  alert_change() {
    var timezone = new Date().getTimezoneOffset() / 60;
    var cStart_time = new Date(this.state.currentSchedule.start_time);
    var cEnd_time = new Date(this.state.currentSchedule.end_time);
    var sStart_time = new Date(this.state.selectedSchedule.start_time);
    var sEnd_time = new Date(this.state.selectedSchedule.end_time);

    var cDayString = cStart_time.getDay().toString().padStart(2, 0) + '/' + (cStart_time.getMonth() + 1).toString().padStart(2, 0) + '/' + (cStart_time.getFullYear()).toString().padStart(2, 0);
    var sDayString = sStart_time.getDay().toString().padStart(2, 0) + '/' + (sStart_time.getMonth() + 1).toString().padStart(2, 0) + '/' + (sStart_time.getFullYear()).toString().padStart(2, 0);
    var cStartString = (cStart_time.getHours() + timezone).toString().padStart(2, 0) + ':' + cStart_time.getMinutes().toString().padStart(2, 0);
    var cEndString = (cEnd_time.getHours() + timezone).toString().padStart(2, 0) + ':' + cEnd_time.getMinutes().toString().padStart(2, 0);
    var sStartString = (sStart_time.getHours() + timezone).toString().padStart(2, 0) + ':' + sStart_time.getMinutes().toString().padStart(2, 0);
    var sEndString = (sEnd_time.getHours() + timezone).toString().padStart(2, 0) + ':' + sEnd_time.getMinutes().toString().padStart(2, 0);

    Alert.alert(
      'Mudar de Horário',
      this.state.currentEmployee + ', deseja trocar de horario com o/a ' +
      this.state.selectedEmployee + '?\n\n ' +
      cDayString + '    ->   ' + sDayString + '\n' + cStartString + ' - ' + cEndString +
      '  ->  ' + sStartString + ' - ' + sEndString,
      [{text: 'Não', onPress: () => { }},
      {text: 'Sim', onPress: () => {this.requestChange();}}],
      {cancelable: true}
    );
  }

  alert_Selfchange(date) {
    if (!this.state.finalDateString) {
      this.setState({finalDateString: new Date()});
    } else {this.setState({finalDateString: date});}
    var timezone = new Date().getTimezoneOffset() / 60;
    var start_time = new Date(this.state.currentSchedule.start_time);
    var end_time = new Date(this.state.currentSchedule.end_time);
    var dayString = start_time.getDay().toString().padStart(2, 0) + '/' + (start_time.getMonth() + 1).toString().padStart(2, 0) + '/' + (start_time.getFullYear()).toString().padStart(2, 0);
    var startString = (start_time.getHours() + timezone).toString().padStart(2, 0) + ':' + start_time.getMinutes().toString().padStart(2, 0);
    var endString = (end_time.getHours() + timezone).toString().padStart(2, 0) + ':' + end_time.getMinutes().toString().padStart(2, 0);
    Alert.alert(
      'Mudar de Horário',
      store.getState().currentUser.firstName + ', deseja trocar de horario' + '?\n\nde ' +
      dayString + '    para   ' +
      (this.state.changeDay.getDate()).toString().padStart(2,0) + '/' +
      (this.state.changeDay.getMonth() + 1).toString().padStart(2 , 0) + '/' +
      this.state.changeDay.getFullYear() + '\nde ' + startString +
       ' - ' + endString + '  para  ' +
      (this.state.changeDay.getHours()).toString().padStart(2 , 0) + ':' +
      (this.state.changeDay.getMinutes()).toString().padStart(2,0) + ' - ' +
      (this.state.finalDateString.getHours()).toString().padStart(2,0) + ':' +
      (this.state.finalDateString.getMinutes()).toString().padStart(2,0),
      [{text: 'Não', onPress: () => {this.timePickerVisible(false);this.hideEndDateTimePicker();}},
        {text: 'Sim', onPress: () => {this.requestChange(); }}],
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
        onPress={() => this.setNames(item)}
        item={item}/>);
  }

  setNames(item) {
    this.setState({selectedSchedule: item}, () => {
      this.axiosProfile(this.state.currentSchedule.profile_id, false);
    });
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
