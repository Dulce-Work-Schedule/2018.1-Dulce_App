import NewManager from '../Routes/NewManager';
import Doctors from '../Routes/Doctors';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import HospitalsScreen from '../Screens/HospitalsScreen';
import {DrawerNavigator} from 'react-navigation';

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
  'Ver Hospitais': {
    screen: HospitalsScreen
  }
}, {
  drawerWidth: 300
});
