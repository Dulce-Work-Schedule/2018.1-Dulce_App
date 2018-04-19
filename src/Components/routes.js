import EditScreen from '../Screens/EditScreen';
import NewManager from '../Screens/NewManager';
import ListScreen from '../Screens/ListScreen';
import Doctors from '../Routes/Doctors';
import ProfileManagerScreen from '../Screens/ProfileManagerScreen';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  'Ver Medicos': {
    screen: Doctors
  },
  'Meu Perfil': {
    screen: ProfileManagerScreen
  },
  'Editar Perfil': {
    screen: EditScreen
  },
  'Criar novo gestor': {
    screen: NewManager
  }
}, {
  drawerWidth: 300
});
