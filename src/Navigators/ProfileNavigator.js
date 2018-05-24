import EditScreen from '../Screens/EditScreen';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  profile: {
    screen: ProfileManagerScreen,
    navigationOptions: {
      header: null
    }
  },
  edit: {
    screen: EditScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ProfileNavigator = StackNavigator(routes, config);

export default ProfileNavigator;
