import NewProfile from '../Screens/NewProfile';
import ListProfile from '../Screens/ListProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  newProfile: {
    screen: NewProfile,
    navigationOptions: {
      header: null
    }
  },
  profile: {
    screen: ListProfile,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const NewProfileNavigator = StackNavigator(routes, config);

export default NewProfileNavigator;
