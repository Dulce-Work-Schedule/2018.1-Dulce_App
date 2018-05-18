import NewManager from '../Routes/NewManager';
import Doctors from '../Routes/Doctors';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import {DrawerNavigator} from 'react-navigation';
import Sectors from '../Routes/Sectors';
import Hospitals from '../Routes/Hospitals';
import Schedule from '../Routes/Schedule';

export default DrawerNavigator({
  'Ver Medicos': {
    screen: Doctors
  },
  'Meu Perfil': {
    screen: Profile
  },
  'Criar Novo Gerente': {
    screen: NewManager
  },
  Logout: {
    screen: Logout
  },
  'Ver Setores': {
    screen: Sectors
  },
  'Ver Hospitais': {
    screen: Hospitals
  },
  'Ver Mês': {
    screen: Schedule
  }
}, {
  drawerWidth: 300
});
