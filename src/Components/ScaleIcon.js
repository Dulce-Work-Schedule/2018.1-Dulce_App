import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

const styles = {
  container: {
   flex: 1,
   width: 20,
   height: 20
  }
}



class ScaleIcon extends React.Component{

  render(){
    return (

      <TouchableHighlight onPress = {() => this.props.onPress()} style = {styles.container}>
       <View >
       <Image source={require('../../assets/img/calendarIcon.png')} />
       </View>
      </TouchableHighlight>

    );
  }
}

export default ScaleIcon;
