import VacationScreen from '../Screens/VacationScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  vacation: {
    screen: VacationScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const VacationNavigator = StackNavigator(routes, config);

export default VacationNavigator;
