import ListScreen from '../Screens/ListScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: ListScreen,
    navigationOptions: {
      header: null
    }
  },
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Perfil',
      backgroundColor: '#5f4b8b'
    }
  }
};

const config = {};

const DoctorNavigator = StackNavigator(routes, config);

export default DoctorNavigator;
