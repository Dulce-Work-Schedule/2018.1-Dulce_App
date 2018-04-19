import EditScreen from '../Screens/EditScreen';
import NewManager from '../Screens/NewManager';
import ListScreen from '../Screens/ListScreen';
import Doctors from '../Routes/Doctors';
import Logout from '../Routes/Logout';
import Profile from '../Routes/Profile';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  'Ver Medicos': {
    screen: Doctors
  },
  'Meu Perfil': {
    screen: Profile
  },
  'Criar novo gestor': {
    screen: NewManager
  },
  Logout: {
    screen: Logout
  }
}, {
  drawerWidth: 300
});
