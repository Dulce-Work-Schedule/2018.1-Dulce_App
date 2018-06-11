import ListProfile from '../Screens/ListProfile';
import {StackNavigator} from 'react-navigation';

const routes = {
  list: {
    screen: ListProfile,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const ListProfileNavigator = StackNavigator(routes, config);

export default ListProfileNavigator;
