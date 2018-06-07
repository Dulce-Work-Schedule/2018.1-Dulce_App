import SectorsScreen from '../Screens/SectorsScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: SectorsScreen,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const HosptalsNavigation = StackNavigator(routes, config);

export default HosptalsNavigation;
