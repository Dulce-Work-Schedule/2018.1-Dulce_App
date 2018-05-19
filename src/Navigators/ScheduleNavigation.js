import WeekSchedule from '../Screens/WeekSchedule';
import {StackNavigator} from 'react-navigation';

const routes = {
  week: {
    screen: WeekSchedule,
    navigationOptions: {
      title: 'Escalas da semana'
    }
  }
};

const config = {};

const ScheduleNavigation = StackNavigator(routes, config);

export default ScheduleNavigation;
