import React from 'react';
import {View} from 'react-native';
import store from '../Reducers/store';
import SmallLogo from '../Components/SmallLogo';
import ScreenHeader from '../Components/ScreenHeader';
import SideBar from '../Components/SideBar';
import {Text,Button} from 'native-base';
import IconButton from '../Components/IconButton';
import {profileManagerScreen as styles} from './styles' ;

class ProfileManagerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  navigateToEditScreen() {
    this.props.navigation.navigate('edit');
  }

  renderScreen() {
    return (
      <View style={{flex: 3}}>
        <View style={{flex: 3}}>
          <SmallLogo />
          <View style={{alignItems: 'flex-start', justifyContent: 'center', width: '80%', alignSelf: 'center'}} >
          <Text style={styles.textProfile}> {store.getState().currentUser.firstName} {store.getState().currentUser.lastName}</Text>
            <Text style={styles.text}>{store.getState().currentUser.email}</Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Hospital: </Text>
            <Text style={styles.text}>{store.getState().currentProfile.hospital} </Text></View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Setor: </Text>
            <Text style={styles.text}>{store.getState().currentProfile.sector} </Text></View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Matricula: </Text>
            <Text style={styles.text}>{store.getState().currentProfile.registration} </Text></View></View></View>
        <View style={{flex: 1 ,alignItems: 'center'}}>
          <IconButton
            icon = 'edit'
            text = 'Editar'
            onPress={() => this.navigateToEditScreen()}/>
          <Button transparent warning style={styles.transparentButton}>
            <Text style={styles.textButtonTrasparent}>Excluir conta</Text>
          </Button></View></View>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}><SideBar />
        <View style={styles.container}>
          <ScreenHeader title='Meu Perfil' icon='arrow-back'/>
          {this.state.loading ? (
            this.renderSpinner()) : (
            this.renderScreen()
          )}
        </View>
      </View>
    );}
}

export default ProfileManagerScreen;
