import { LOGIN, LOGOUT } from '../Actions/currentUser';

const initialState = {
  nome:"gabibs"
  };

function currentUser(state=initialState,action){
  switch (action.type) {
    case LOGIN:
      const currentUser = action.currentUser;
      return currentUser;
    case LOGOUT:
      const currentUser = action.currentUser;
      return currentUser;

    default:
      return initialState;
  }
}

export default currentUser;
