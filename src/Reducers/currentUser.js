import { LOGIN, LOGOUT } from '../Actions/currentUser';

const initialState = {};

function currentUser(state=initialState,action){
  switch (action.type) {
    case LOGIN:
      const currentUser = action.currentUser;
      return currentUser;
    default:
      return initialState;
  }
}

export default currentUser;
