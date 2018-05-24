import WeekSchedule from '../Screens/WeekSchedule';
import {StackNavigator} from 'react-navigation';

const routes = {
  week: {
    screen: WeekSchedule,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ScheduleNavigation = StackNavigator(routes, config);

export default ScheduleNavigation;
