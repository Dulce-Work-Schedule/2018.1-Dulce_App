import NotificationScreen from '../Screens/NotificationScreen';
import {StackNavigator} from 'react-navigation';

const routes = {
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      title: 'Notificações'
    }
  }
};

const config = {};

const NotificationsNavigation = StackNavigator(routes, config);

export default NotificationsNavigation;
