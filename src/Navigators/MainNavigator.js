import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';
import NewManager from '../Screens/NewManager';
import EditScreen from '../Screens/EditScreen';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';
import EmployeeProfileScreen from '../Screens/EmployeeProfileScreen';
import {StackNavigator} from 'react-navigation';
import InitialScreen from '../Screens/InitialScreen';
import ListScreen from '../Screens/ListScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const routes = {
    list: {
      screen: ListScreen,
      navigationOptions: {
        title: 'Lista'
      }
    },
    profile: {
      screen: ProfileScreen,
      navigationOptions:{
        title: 'Profile'
      }
    },
    login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    ProfileManager: {
      screen: ProfileManagerScreen,
    },
    initial : {
      screen: InitialScreen,
      navigationOptions: {
          header: null
      }
    },
    EmployeeProfile: {
        screen: EmployeeProfileScreen,

      },

    users: {
        screen: UsersScreen,
        navigationOptions: {
            title: 'Usuários'
        }
    },
    newManager: {
        screen: NewManager,
        navigationOptions: {
            title: 'Crie sua conta'
        }
    },
    edit: {
        screen: EditScreen,
        navigationOptions: {
            title: 'Editar'
        }
    }
};

const config = {};

const MainNavigator = StackNavigator(routes, config);

export default MainNavigator;
