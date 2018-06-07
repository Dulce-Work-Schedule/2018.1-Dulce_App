import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';

export default class VacationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <DateRangePicker
          initialRange={['2018-04-01', '2018-04-10']}
          onSuccess={(s, e) => Alert.alert(s + '||' + e)}
          theme={{markColor: '#5f4b8b', markTextColor: 'white'}}/>
      </View>
    );
  }
}
