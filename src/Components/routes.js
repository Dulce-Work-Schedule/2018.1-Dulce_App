import NewManager from '../Routes/NewManager';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import Profiles from '../Routes/Profiles';
import {DrawerNavigator} from 'react-navigation';
import Sectors from '../Routes/Sectors';
import Hospitals from '../Routes/Hospitals';
import Schedule from '../Routes/Schedule';
import Notifications from '../Routes/Notifications';
import NewProfile from '../Routes/NewProfile';

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
  'Criar Novo Gerente': {
    screen: NewManager
  },
  'Ver Setores': {
    screen: Sectors
  },
  'Ver Hospitais': {
    screen: Hospitals
  },
  'Notificações': {
    screen: Notifications
  },
  'Criar Perfil': {
    screen: NewProfile
  },
  Logout: {
    screen: Logout
  }
}, {
  drawerWidth: 300
});
