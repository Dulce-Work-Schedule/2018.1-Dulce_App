import {SETPROFILE, RESETPROFILE} from '../Actions/currentProfile';

const initialState = {
  id: '5b2d6fa1415965001ddaa5dd',
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
      return state;
  }
}

export default currentProfile;
