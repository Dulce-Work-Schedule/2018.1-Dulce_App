import React from 'react';
import {
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import DateRangePicker from '../Components/DateRangePicker';
import AGRButton from '../Components/AGRButton';
import ImagePicker from 'react-native-image-picker';
import {Card, CardItem, Text, Body, Form, Textarea, Picker, Right, Left} from 'native-base';


const XDate = require('xdate');

const currentDate = {
  year: new XDate().getFullYear(),
  month: new XDate().getMonth() + 1,
  day: new XDate().getDate()
};

export default class Absences extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      documentSource: null,
      absenceOption: '',
      startDay: currentDate,
      endDay: currentDate
    };
  }

  getDocument(response) {
    /* istanbul ignore console */
    console.log('Response = ', response);

    if (response.didCancel) {
      /* istanbul ignore console */
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      /* istanbul ignore console */
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      /* istanbul ignore console */
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

    ImagePicker.showImagePicker(options, (response) => this.getDocument(response));
  }

  onSelectDates(startDay, endDay) {
    this.setState({
      startDay: startDay,
      endDay: endDay
    });
  }

  onSelectAbsence(value) {
    this.setState({
      absenceOption: value
    });
  }

  renderPicker() {
    return (
        <CardItem>
            <Body style={{flexDirection: 'row'}}>
                <Left>
                <Text>
                    Tipo de abono:
                </Text>
                </Left>
                <Right>
                <Picker
                    selectedValue={this.state.absenceOption}
                    style={styles.picker}
                    onValueChange={(itemValue) => this.onSelectAbsence(itemValue)}>
                    <Picker.Item label='Atestado' value='medical leave' />
                    <Picker.Item label='Maternidade' value='maternity leave' />
                    <Picker.Item label='Paternidade' value='paternity leave' />
                </Picker>
                </Right>
            </Body>
        </CardItem>
    );
  }

  renderPhotoPicker() {
    return (
        <CardItem>
            <Body style={styles.container2}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.document, styles.documentContainer, {marginBottom: 20}]}>
                        { this.state.documentSource === null ? <Text>Selecione uma Foto</Text>
                        : <Image style={styles.document} source={this.state.documentSource} />
                        }
                    </View>
                </TouchableOpacity>
            </Body>
        </CardItem>
    );
  }

  renderSelectedDates() {
    return (
        <CardItem header bordered>
            <View style={styles.view1}>
                <Text style={styles.date}>
                    {this.state.startDay.day}/{this.state.startDay.month}/
                    {this.state.startDay.year} até {this.state.endDay.day}/{this.state.endDay.month}/{this.state.endDay.year}
                </Text>
            </View>
        </CardItem>
    );
  }

  renderCard() {
    return (
        <Card>
            {this.renderSelectedDates()}
            {this.props.type === 'complete'
                ? this.renderPicker()
            : <View />}
            <CardItem>
                <Body>
                    <Form style={styles.form}>
                        <Textarea rowSpan={5} bordered placeholder='Justificativa' />
                    </Form>
                </Body>
            </CardItem>
            {this.props.type === 'complete'
            ? this.renderPhotoPicker()
            : <View/>}
            <CardItem footer bordered>
                <AGRButton style={styles.button} onPress={() => {}} text='Solicitar' />
            </CardItem>
        </Card>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={styles.title}>
                {this.props.title}
          </Text>
          <DateRangePicker
            onSuccess={(startDay, endDay) => this.onSelectDates(startDay, endDay)}
            theme={{markColor: '#5f4b8b', markTextColor: 'white'}}
          />
          {this.renderCard()}
        </ScrollView>
      </View>
    );
  }

}
const styles = {
  title: {
    margin: 5,
    alignSelf: 'center',
    fontSize: 15,
    color: '#5f4b8b'
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
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
  view1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: 375
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  documentContainer: {
    borderColor: '#9B9B9B',
    backgroundColor: '#fff',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  document: {
    borderRadius: 5,
    width: 180,
    height: 180
  },
  picker: {
    height: 50,
    width: 170,
    marginLeft: 10
  }
};
