import {SETPROFILE, RESETPROFILE} from '../Actions/currentProfile';

const initialState = {
  id: 40028922,
  registration: 160111612,
  sector: 'Portal',
  hospital: 'Lappis'
};

function currentProfile(state = initialState,action) {
  switch (action.type) {
    case SETPROFILE:
      return action.currentProfile;
    case RESETPROFILE:
      return initialState;

    default:
      return initialState;
  }
}

export default currentProfile;
