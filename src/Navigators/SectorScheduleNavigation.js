import SectorSchedule from '../Screens/SectorSchedule';
import {StackNavigator} from 'react-navigation';

const routes = {
  sector: {
    screen: SectorSchedule,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const SectorScheduleNavigation = StackNavigator(routes, config);

export default SectorScheduleNavigation;
