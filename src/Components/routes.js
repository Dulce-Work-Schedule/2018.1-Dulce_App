import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import Profiles from '../Routes/Profiles';
import {DrawerNavigator} from 'react-navigation';
import SectorSchedule from '../Routes/SectorSchedule';
import ProfileSchedule from '../Routes/ProfileSchedule';
import Notifications from '../Routes/Notifications';
import Vacation from '../Routes/Vacation';
import Absences from '../Routes/Absences';
import SideMenu from './SideMenu';

export default DrawerNavigator({
  'Minha Escala': {
    screen: ProfileSchedule
  },
  'Escalas do Setor': {
    screen: SectorSchedule
  },
  'Todos os perfis': {
    screen: Profiles
  },
  'Meu perfil': {
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
