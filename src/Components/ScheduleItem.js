import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {scheduleItem as styles} from '../styles' ;

class ScheduleItem extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor='#5f4b8b'
        onPress={() => {this.props.onPress();}}
        style={styles.item}>
        <View>
          <Text>{this.props.item.employee}</Text>
          <Text>{this.props.item.specialty}</Text>
          <Text>{this.props.item.start_time} - {this.props.item.end_time}</Text>
          <Text>{this.props.item.amount_of_hours}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ScheduleItem;
