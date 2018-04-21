import SectorsScreen from '../Screens/SectorsScreen';
import Doctors from '../Routes/Doctors';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: SectorsScreen,
    navigationOptions: {
      header: null
    }
  },
  doctors: {
    screen: Doctors,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const HosptalsNavigation = StackNavigator(routes, config);

export default HosptalsNavigation;
