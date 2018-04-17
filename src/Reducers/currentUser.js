import {LOGIN, LOGOUT} from '../Actions/currentUser';

const initialState = {};

function currentUser(state = initialState,action) {
  switch (action.type) {
    case LOGIN:
      var User = action.User;
      return User;
    case LOGOUT:
      User = action.User;
      return User;

    default:
      return initialState;
  }
}

export default currentUser;
