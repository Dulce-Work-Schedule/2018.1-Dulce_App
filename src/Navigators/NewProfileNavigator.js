import NewProfile from '../Screens/NewProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  profile: {
    screen: NewProfile,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ScheduleNavigation = StackNavigator(routes, config);

export default ScheduleNavigation;
