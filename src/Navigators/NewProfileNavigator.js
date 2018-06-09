import NewProfile from '../Screens/NewProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  profile: {
    screen: NewProfile,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const NewProfileNavigator = StackNavigator(routes, config);

export default NewProfileNavigator;
