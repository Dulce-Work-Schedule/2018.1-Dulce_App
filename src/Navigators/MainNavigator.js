import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';
import CriarGestor from '../Screens/CriarGestor';
import EditScreen from '../Screens/EditScreen';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';

const routes = {

    login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    ProfileManager: {
      screen: ProfileManagerScreen,
    },
    users: {
        screen: UsersScreen,
        navigationOptions: {
            title: 'Usuários'
        }
    },
    criarGestor: {
        screen: CriarGestor,
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
