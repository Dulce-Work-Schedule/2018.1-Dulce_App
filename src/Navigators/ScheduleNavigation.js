import MonthScheduleScreen from '../Screens/MonthScheduleScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  month: {
    screen: MonthScheduleScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ScheduleNavigation = StackNavigator(routes, config);

export default ScheduleNavigation;
