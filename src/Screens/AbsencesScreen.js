import React from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
import DateRangePicker from '../Components/DateRangePicker';
import AGRButton from '../Components/AGRButton';
import ImagePicker from 'react-native-image-picker';
import {Icon, Card, CardItem, Text, Body, Form, Textarea} from 'native-base';

const XDate = require('xdate');

export default class AbsencesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      documentSource: null,
      startDay: {
        year: new XDate().getFullYear(),
        month: new XDate().getMonth() + 1,
        day: new XDate().getDate()
      },
      endDay: {
        year: new XDate().getFullYear(),
        month: new XDate().getMonth() + 1,
        day: new XDate().getDate()
      }
    };
  }

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
          <Card>
            <CardItem header bordered>
              <View style={styles.view1}><Text style={styles.date}>{this.state.startDay.day}/{this.state.startDay.month}/{this.state.startDay.year}</Text></View>
              <View style={styles.view2}><Icon name='md-arrow-dropright-circle' style={styles.icon} /></View>
              <View style={styles.view3}><Text style={styles.date}>{this.state.endDay.day}/{this.state.endDay.month}/{this.state.endDay.year}</Text></View>
            </CardItem>

            <CardItem bordered>
              <Body style={styles.container}>
                  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.document, styles.documentContainer, {marginBottom: 20}]}>
                      { this.state.documentSource === null ? <Text>Selecione uma Foto</Text>
                        : <Image style={styles.document} source={this.state.documentSource} />
                      }
                    </View>
                  </TouchableOpacity>
              </Body>
            </CardItem>
            
            <CardItem bordered>
              <Body>
                <Form style={styles.form}>
                  <Textarea rowSpan={5} bordered placeholder='Justificativa' />
                </Form>
              </Body>
            </CardItem>

            <CardItem footer bordered>
              <AGRButton
                style={styles.button}
                onPress={() => {}}
                text='Selecionar'
              />
            </CardItem>
          </Card>
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
  },
  date: {
    color: '#5f4b8b',
    fontSize: 20
  },
  dates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    borderColor: '#5f4b8b',
    borderWidth: 2,
    borderRadius: 5
  },
  justify: {
    flex: 1.5,
    backgroundColor: '#ede8f7',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderColor: '#5f4b8b',
    borderWidth: 2,
    borderRadius: 5
  },
  button: {
    width: 200,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10
  },
  icon: {
    fontSize: 40,
    color: '#5f4b8b'
  },
  view1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    flex: 1,
    alignItems: 'center'
  },
  form: {
    width: 375
  }
});
