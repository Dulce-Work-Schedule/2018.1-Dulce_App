import {LOGIN, LOGOUT} from '../Actions/currentUser';

const initialState = {};

function currentUser(state = initialState,action) {
  switch (action.type) {
    case LOGIN:
      var currentUser = action.currentUser;
      return currentUser;
    case LOGOUT:
      currentUser = action.currentUser;
      return currentUser;

    default:
      return initialState;
  }
}

export default currentUser;
