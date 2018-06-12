import NewManager from '../Routes/NewManager';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import Profiles from '../Routes/Profiles';
import {DrawerNavigator} from 'react-navigation';
import Sectors from '../Routes/Sectors';
import Schedule from '../Routes/Schedule';
import Notifications from '../Routes/Notifications';
import Vacation from '../Routes/Vacation';

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
  'Notificações': {
    screen: Notifications
  },
  'Solicitar Férias': {
    screen: Vacation
  },
  Logout: {
    screen: Logout
  }
}, {
  drawerWidth: 300
});
