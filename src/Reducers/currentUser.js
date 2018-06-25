import {LOGIN, LOGOUT} from '../Actions/currentUser';

const initialState = {logged_in: false};

function currentUser(state = initialState,action) {
  switch (action.type) {
    case LOGIN:
      return action.currentUser;
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default currentUser;
