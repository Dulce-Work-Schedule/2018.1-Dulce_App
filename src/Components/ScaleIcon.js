import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

const styles = {
  container: {
   marginTop: 100,
   width: 100,
   justifyContent: 'center',
   alignItems: 'center'
 },
    icon: {
    height: 100,
    width: 100
    }
}



class ScaleIcon extends React.Component{

  render(){
    return (
      <TouchableHighlight onPress = {() => this.props.onPress()} style = {styles.container}>
       <Image source={require('../../assets/img/calendarIcon.png')} style = {styles.icon}/>
      </TouchableHighlight>
    );
  }
}

export default ScaleIcon;
