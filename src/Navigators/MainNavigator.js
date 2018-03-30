import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';

import EditScreen from '../Screens/EditScreen';

import VisualizaGestor from '../Screens/ProfileManager';


const routes = {
    login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    users: {
        screen: UsersScreen,
        navigationOptions: {
            title: 'Usuários'
        }
    },

    edit: {
        screen: EditScreen,
        navigationOptions: {
            title: 'Editar'
        }

    ProfileManager: {
      screen: ProfileManager,
      navigationOptions: {
          title: 'Perfil'
      }

    }
};

const config = {};

const MainNavigator = StackNavigator(routes, config);

export default MainNavigator;
