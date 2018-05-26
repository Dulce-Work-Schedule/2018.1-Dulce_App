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

import axios from 'axios';
import store from '../Reducers/store';
import {Container, Content, Spinner} from 'native-base';



import {Header, Body, Title,Container} from 'native-base';

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
      loading: true,
      selectedDay: new Date(),
      itemDate: []
    };

  }

  componentDidMount() {
    const url = 'http://172.18.0.1:8091/api/schedule/listMonth/?month=' +
    (this.state.selectedDay.getMonth() + 1);

    axios.get(url,{
      headers: {
        'x-access-token': store.getState().currentUser.token
      }
    })
    .then((response) => {
      this.setState({itemDate: response.data,loading: false});
      this.arrayToObject();
      if (response.data === []) {
        Alert.alert(
          'Erro',
          'Não há horários criados!'
        );
      }
    })
    .catch(() => {Alert.alert(
      'Erro',
      'Verifique sua conexão.'
    );});

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  arrayToObject() {
    const newObj = this.state.itemDate.reduce((acc, cur) => {
      var date = new Date(cur.date);
      var format = (date.getFullYear() + '-' +
        (date.getMonth()).toString().padStart(2,0) + '-' +
        (date.getDate()).toString().padStart(2,0));

      if (!acc[format]) {
        acc[format] = [];
      }
      acc[format].push(cur);
      return acc;
    }, {});
    this.setState({items: newObj});
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
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
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
        {text: 'Não', onPress: () => {}},
        {text: 'Sim', onPress: () => { this.setModalVisible(true); }}
      ],
      {cancelable: true}
    );
  }

  alert_change(employee) {
    this.setState({selectedSchedule: employee}, () => {

      Alert.alert(
        'Mudar de Horário',
        this.state.currentSchedule.employee +
        ', deseja trocar de horario com o/a ' +
        this.state.selectedSchedule.employee + '?\n\n ' +
        this.state.currentSchedule.date + '    ->   ' +
        this.state.selectedSchedule.date + '\n' +
        this.state.currentSchedule.start_time + ' - ' +
        this.state.currentSchedule.end_time + '  ->  ' +
        this.state.selectedSchedule.start_time + ' - ' +
        this.state.selectedSchedule.end_time,
        [
          {text: 'Não', onPress: () => { }},
          {text: 'Sim', onPress: () => {this.requestChange();}}
        ],
        {cancelable: true}
      );
    });
  }

  renderItem(item) {
    return (
      <TouchableHighlight
      onPress={() => {this._alert(item);}}
      underlayColor='#5f4b8b'
      style={[styles.item, {height: item.height}]}>
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
      <TouchableHighlight
      onPress={() => { this.alert_change(item); }}
      underlayColor='#5f4b8b'
      style={[styles.item, {height: item.height}]}>
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
        <Modal
        isVisible={this.state.modalVisible}
        backdropOpacity={0.2}
        style={{backgroundColor: 'white'}}
        onBackdropPress={() => {this.setModalVisible(false);}}>
          <View style={{flex: 1}} >
            <Text style={{margin: 5, alignSelf: 'center'}}>
              Selecione o Horário que Deseja solicitar troca
            </Text>
            <View style={{flex: 1}}>
              {this.renderAgenda(this.renderChangeItem)}
            </View>
            {this.cancelChange()}
          </View>
        </Modal>
      </View>
    );
  }

  cancelChange() {
    return (
      <TouchableHighlight onPress={() => {this.setModalVisible(false);}} style={{backgroundColor: '#5f4b8b'}}>
        <Text style={{margin: 5, alignSelf: 'center',fontSize: 18,color: 'white'}}>
      Cancelar
        </Text>
      </TouchableHighlight>
    );
  }
  renderAgenda() {
    return (
      <Container>
        <Header style={{backgroundColor: '#5f4b8b'}}>
          <Body>
            <Title style={{fontFamily: 'Raleway'}}>Escalas</Title>
          </Body>
        </Header>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={this.state.selectedDay}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}

          // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          theme={{
            calendarBackground: '#ffffff',
            agendaKnobColor: '#5f4b8b',
            selectedDayBackgroundColor: '#5f4b8b'
          }}
        />
      </Container>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Nenhuma escala neste dia!</Text></View>
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
      // <View>
      //   {
      //     this.state.loading ? (
      //       <Container>
      //         <Content>
      //           <Spinner color='#5f4b8b'/>
      //         </Content>
      //       </Container>
      //     ) : (
            <View style={{flex: 1}}>
              {this.renderAgenda(this.renderItem)}
              {this.renderModal()}
            </View>
      //     )
      //   }
      // </View>
    );
  }
}
