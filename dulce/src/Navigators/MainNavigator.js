import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import UsersScreen from '../Screens/UsersScreen';

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
    }
};

const config = {};

const MainNavigator = StackNavigator(routes, config);

export default MainNavigator;