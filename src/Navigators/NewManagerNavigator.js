import NewManager from '../Screens/NewManager';
import Doctors from '../Routes/Doctors';
import {StackNavigator} from 'react-navigation';

const routes = {
  new: {
    screen: NewManager,
    navigationOptions: {
      header:null
    }
  },
  initial: {
    screen: Doctors,
    navigationOptions: {
      header: null
    }
  }
};

const config = {};

const NewManagerNavigator = StackNavigator(routes, config);

export default NewManagerNavigator;
