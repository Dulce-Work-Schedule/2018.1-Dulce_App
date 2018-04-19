import ListScreen from '../Screens/ListScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: ListScreen,
    navigationOptions: {
      title: 'Lista de Médicos'
    }
  },
  profile: {
    screen: ProfileScreen
  }
};

const config = {};

const DoctorNavigator = StackNavigator(routes, config);

export default DoctorNavigator;
