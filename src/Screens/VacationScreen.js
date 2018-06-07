import React, {Component} from 'react';
import {View, Alert, Text} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';
import ScreenHeader from '../Components/ScreenHeader';

const styles = {
  title: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  Date: {
    color: '#fff',
    fontSize: 10,
    marginTop: 22,
    marginBottom: 3
  }
};

export default class VacationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title='Férias'
        />
        <Text style={styles.title}>
              Selecione o período de férias desejado
        </Text>
        <DateRangePicker
          initialRange={['2018-04-01', '2018-04-10']}
          onSuccess={(startDay, EndDay) => Alert.alert(startDay + '||' + EndDay)}
          theme={{markColor: '#5f4b8b', markTextColor: 'white'}}
        />
      </View>
    );
  }
}
