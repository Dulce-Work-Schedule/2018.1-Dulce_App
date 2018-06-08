import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import DateRangePicker from '../Components/DateRangePicker';
import ImagePicker from 'react-native-image-picker';

export default class AbsencesScreen extends React.Component {

  state = {
    documentSource: null
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          documentSource: source
        });
      }
    });
  }

  onSelectDates(startDay, endDay) {
    this.setState({
      startDay: startDay,
      endDay: endDay
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title='Abono de Faltas'
        />
        <ScrollView>
          <Text style={styles.title}>
                Selecione o período de abono
          </Text>
          <DateRangePicker
            onSuccess={(startDay, endDay) => this.onSelectDates(startDay, endDay)}
            theme={{markColor: '#5f4b8b', markTextColor: 'white'}}
          />
          <View style={styles.container}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.document, styles.documentContainer, {marginBottom: 20}]}>
            { this.state.documentSource === null ? <Text>Select a Photo</Text>
              : <Image style={styles.document} source={this.state.documentSource} />
            }
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  documentContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  document: {
    borderRadius: 5,
    width: 150,
    height: 150
  },
  title: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 15,
    color: '#5f4b8b',
    backgroundColor: 'white'
  }
});
