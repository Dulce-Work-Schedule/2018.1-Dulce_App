import NotificationScreen from '../Screens/NotificationScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      header: 'Notificações'
    }
  }
};

const config = {};

const NotificationsNavigation = StackNavigator(routes, config);

export default NotificationsNavigation;
