import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {scheduleItem as styles} from './styles' ;
import axios from 'axios';
import store from '../Reducers/store';
import {purple_dulce} from '../styles';

class ScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: new Date().getTimezoneOffset() / 60,
      start_time: this.props.item.start_time ? new Date(this.props.item.start_time) : '',
      end_time: this.props.item.end_time ? new Date(this.props.item.end_time) : '',
      start_time_string: '',
      end_time_string: '',
      userId: '',
      employee: '',
      specialty: 'teste',
      loading: true
    };
  }

  async componentDidMount() {
    await this.setTimeString();
    await this.setState({loading: false});
  }
  async axiosProfile() {
    const url = 'http://18.231.9.190:8083/api/profile/view/?profile_id=' + this.props.item.profile_id;
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      this.setState({userId: response.data.user_id, specialty: response.data.speciality});
      console.log('setor:' + response.data.sector_id);
      this.axiosUser();
    });
  }

  axiosUser() {
    const url = 'http://52.67.4.137:8083/api/user/listById?id=' + this.state.userId;
    axios.get(url,{
      headers: {
        'Authorization': 'Bearer ' + store.getState().currentUser.token
      }
    })
    .then((response) => {
      this.setState({employee: response.data.firstName + ' ' + response.data.lastName});
    });
  }

  async setTimeString() {
    if ((this.state.start_time !== '') && (this.state.end_time !== '')) {
      var st_string = (this.state.start_time.getHours() + this.state.timezone).toString().padStart(2, 0) +
       ':' + this.state.start_time.getMinutes().toString().padStart(2, 0);
      var et_string = (this.state.end_time.getHours() + this.state.timezone).toString().padStart(2, 0) +
      ':' + this.state.end_time.getMinutes().toString().padStart(2, 0);
      if ((this.state.start_time.getDate() < this.state.end_time.getDate()) ||
      (this.state.start_time.getMonth() < this.state.end_time.getMonth())) {
        et_string += '(' + this.state.end_time.getDay().toString().padStart(2, 0) + '/' +
        (this.state.end_time.getMonth() + 1).toString().padStart(2, 0) + '/' +
        (this.state.end_time.getYear()).toString().padStart(2, 0) + ')';
      }
      this.setState({start_time_string: st_string, end_time_string: et_string});
    }
    await this.axiosProfile();
  }

  renderSectorItem() {
    return (
      <TouchableHighlight
        underlayColor={purple_dulce}
        onPress={() => {this.props.onPress();}}
        style={styles.item}>
        <View style={{padding: 5}}>
        {
          this.props.isSector ? (
            <View>
              <Text>{this.state.employee}</Text>
              <Text>{this.state.start_time_string} - {this.state.end_time_string}</Text>
              <Text>{this.state.specialty}</Text>
            </View>
          ) : (
            <View>
              <Text>Hospital</Text>
              <Text>{this.state.start_time_string} - {this.state.end_time_string}</Text>
            </View>
          )
        }
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View>{
        this.state.loading ? (<Text>Loading...</Text>)
        : this.renderSectorItem()
      }
      </View>
    );
  }
}

export default ScheduleItem;
