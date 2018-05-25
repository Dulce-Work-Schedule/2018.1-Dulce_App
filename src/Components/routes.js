import NewManager from '../Routes/NewManager';
import Doctors from '../Routes/Doctors';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import {DrawerNavigator} from 'react-navigation';
import Sectors from '../Routes/Sectors';
import Hospitals from '../Routes/Hospitals';
import Schedule from '../Routes/Schedule';
import Notifications from '../Routes/Notifications';


export default DrawerNavigator({
  'Ver Escala': {
    screen: Schedule
  },
  'Meu Perfil': {
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
  'Ver Escala': {
    screen: Schedule
  },
  'Notificações': {
    screen: Notifications
  },
  'Ver Medicos': {
    screen: Doctors
  },
  Logout: {
    screen: Logout
  }
}, {
  drawerWidth: 300
});
