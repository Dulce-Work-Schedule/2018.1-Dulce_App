import NewUser from '../Screens/NewUser';
import {StackNavigator} from 'react-navigation';

const routes = {
  newUser: {
    screen: NewUser,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const NewUserNavigator = StackNavigator(routes, config);

export default NewUserNavigator;
