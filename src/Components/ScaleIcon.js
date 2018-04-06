import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

const styles = {
  container: {
   marginTop: 150,
   width: 50,
   justifyContent: 'center',
   alignItems: 'center'
 },
    icon: {
    height: 50,
    width: 50
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
