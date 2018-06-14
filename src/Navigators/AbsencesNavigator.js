import AbsencesScreen from '../Screens/AbsencesScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  absences: {
    screen: AbsencesScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const AbsencesNavigator = StackNavigator(routes, config);

export default AbsencesNavigator;
