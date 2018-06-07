import NewManager from '../Screens/NewManager';
import Schedule from '../Routes/Schedule';
import {StackNavigator} from 'react-navigation';

const routes = {
  new: {
    screen: NewManager,
    navigationOptions: {
      header: null
    }
  },
  initial: {
    screen: Schedule,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const NewManagerNavigator = StackNavigator(routes, config);

export default NewManagerNavigator;
