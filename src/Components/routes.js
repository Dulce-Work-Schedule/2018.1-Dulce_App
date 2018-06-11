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
  'Ver Escala': {
    screen: Schedule
  },
  'Todos os perfis': {
    screen: Profiles
  },
  'Meu Perfil atual': {
    screen: Profile
  },
  'Notificações': {
    screen: Notifications
  },
  'Solicitar Férias': {
    screen: Vacation
  },
  'Solicitar Abono de Faltas': {
    screen: Absences
  },
  Logout: {
    screen: Logout
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
