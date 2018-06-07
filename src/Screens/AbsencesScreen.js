import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Image, ImagePicker} from 'react-native-image-picker';

// const updateProfile = async (user, dispatch, result) => {
//   dispatch(isFetching());
//   if (result) {
//     const localUri = result.uri;
//     const filename = localUri.split('/').pop();
//     const match = /\.(\w+)$/.exec(filename);
//     const type = match ? image/${match[1]} : 'image';
//     /*eslint-disable */
//     const formData = new FormData();
//     /* eslint-enable */
//
//     formData.append('file', { uri: localUri, name: filename, type });
//
//     await fetch(`${URL}/profile-picture/`, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         Authorization: Token ${getToken()},
//       },
//     });
//   }


export default class AbscencesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
  }

  pickImage() {
    ImagePicker.launchImageLibrary({
      allowsEditing: true,
      maxWidth: 300,
      maxHeight: 300
    },
    // if (!result.cancelled) {
    //     ,(response) => {result = response;
    //     this.setState({profilePicture: result.uri });
    //   }
    // }
  );
  }

  render() {
    return (
    <View>
    <TouchableHighlight
      onPress={this.pickImage}
      underlayColor='#f5f5f5'
      style={{
        backgroundColor: '#FB3353',
        height: 26,
        width: 26,
        marginTop: -10,
        marginLeft: 100,
        borderRadius: 26 / 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
      <Image
        onPress={() => {}}
        source={'image'}
        style={{height: 12, width: 12
        }}
      />
      </TouchableHighlight>
      </View>
    );
  }
}
