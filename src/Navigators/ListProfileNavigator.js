import ListProfile from '../Screens/ListProfile';
import NewProfile from '../Screens/NewProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  listProfiles: {
    screen: ListProfile,
    navigationOptions: {
      header: null
    }
  },
  profile: {
    screen: NewProfile,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ListProfileNavigator = StackNavigator(routes, config);

export default ListProfileNavigator;
