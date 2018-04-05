import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';
import EditScreen from '../Screens/EditScreen';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';

const routes = {
    ProfileManager: {
      screen: ProfileManagerScreen,
      navigationOptions: {
        title: 'Perfil'
      }

    },

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
    }
};

const config = {};

const MainNavigator = StackNavigator(routes, config);

export default MainNavigator;
