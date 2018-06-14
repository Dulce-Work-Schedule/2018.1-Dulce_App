import HospitalsScreen from '../Screens/HospitalsScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: HospitalsScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const HospitalsNavigation = StackNavigator(routes, config);

export default HospitalsNavigation;
