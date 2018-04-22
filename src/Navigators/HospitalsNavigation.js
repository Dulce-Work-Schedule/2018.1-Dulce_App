import HospitalsScreen from '../Screens/HospitalsScreen';
import Sectors from '../Routes/Sectors';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: HospitalsScreen,
    navigationOptions: {
      header: null
    }
  },
  sectors: {
    screen: Sectors,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const HospitalsNavigation = StackNavigator(routes, config);

export default HospitalsNavigation;
