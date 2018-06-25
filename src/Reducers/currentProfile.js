import {SETPROFILE, RESETPROFILE} from '../Actions/currentProfile';

const initialState = {};

function currentProfile(state = initialState,action) {
  switch (action.type) {
    case SETPROFILE:
      return action.currentProfile;
    case RESETPROFILE:
      return initialState;

    default:
      return state;
  }
}

export default currentProfile;
