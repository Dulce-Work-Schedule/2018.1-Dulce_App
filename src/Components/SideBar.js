import React from 'react';
import {View} from 'react-native';

class SideBar extends React.Component {

  render() {
    return (
      <View style={{flex: 0.25, backgroundColor: '#fd7d01', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#f1f1f1', alignItems: 'center', margin: 1, borderRadius: 5, width: 7.5, height: 40}} />
      </View>
    );
  }
}

export default SideBar;
