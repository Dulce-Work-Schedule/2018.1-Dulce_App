import ProfileSchedule from '../Screens/ProfileSchedule';
import {StackNavigator} from 'react-navigation';

const routes = {
  sector: {
    screen: ProfileSchedule,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ProfileScheduleNavigation = StackNavigator(routes, config);

export default ProfileScheduleNavigation;
