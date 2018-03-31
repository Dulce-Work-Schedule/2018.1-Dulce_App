
import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';
import CriarGestor from '../Screens/CriarGestor';
<<<<<<< HEAD:src/Navigators/MainNavigator.js
import EditScreen from '../Screens/EditScreen';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';

=======
import { StackNavigator } from 'react-navigation';
>>>>>>> #60 fazendo primeiro teste com sucesso:dulce/src/Navigators/MainNavigator.js
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
