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
import {Card, CardItem, Text, Body, Form, Textarea, Picker, Right, Left} from 'native-base';
import styles from '../Styles/styles';

const XDate = require('xdate');

const currentDate = {
  year: new XDate().getFullYear(),
  month: new XDate().getMonth() + 1,
  day: new XDate().getDate()
};

export default class AbsencesScreen extends React.Component {

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
                    style={stylesAbsences.picker}
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
                    <View style={[stylesAbsences.document, stylesAbsences.documentContainer, {marginBottom: 20}]}>
                        { this.state.documentSource === null ? <Text>Selecione uma Foto</Text>
                        : <Image style={stylesAbsences.document} source={this.state.documentSource} />
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
                <AGRButton style={styles.button} onPress={() => {}} text='Selecionar' />
            </CardItem>
        </Card>
    );
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
          {this.renderCard()}
        </ScrollView>
      </View>
    );
  }

}

const stylesAbsences = StyleSheet.create({
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
});
