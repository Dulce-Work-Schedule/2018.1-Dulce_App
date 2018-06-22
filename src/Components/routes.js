import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import Profiles from '../Routes/Profiles';
import {DrawerNavigator} from 'react-navigation';
import Schedule from '../Routes/Schedule';
import Notifications from '../Routes/Notifications';
import Vacation from '../Routes/Vacation';
import Absences from '../Routes/Absences';
import SideMenu from './SideMenu';

export default DrawerNavigator({
  'Ver escala': {
    screen: Schedule
  },
  'Todos os perfis': {
    screen: Profiles
  },
  'Meu perfil atual': {
    screen: Profile
  },
  'Notificações': {
    screen: Notifications
  },
  'Solicitar férias': {
    screen: Vacation
  },
  'Solicitar abono de faltas': {
    screen: Absences
  },
  Logout: {
    screen: Logout
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
