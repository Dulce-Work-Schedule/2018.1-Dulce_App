import reducer from '../../src/Reducers/currentProfile';
import {SETPROFILE, RESETPROFILE} from '../../src/Actions/currentProfile';

const currentProfile = {
  id: 40028922,
  registration: 160111612,
  sector: 'Portal',
  hospital: 'Lappis'
};

describe('currentProfile reducer', () => {
  it('should return the initial state',() => {
    expect(reducer(void 0,{})).toEqual({
      id: 40028922,
      registration: 160111612,
      sector: 'Portal',
      hospital: 'Lappis'});
  });

  it('should handle the setprofile action', () => {
    expect(
      reducer(currentProfile,{
        type: SETPROFILE,
        currentProfile: currentProfile
      })
    ).toEqual({
      id: 40028922,
      registration: 160111612,
      sector: 'Portal',
      hospital: 'Lappis'
    });
  });

  it('should handle the Reset action', () => {
    expect(
      reducer(currentProfile,{
        type: RESETPROFILE,
        currentProfile: {}
      })
    ).toEqual({
      id: 40028922,
      registration: 160111612,
      sector: 'Portal',
      hospital: 'Lappis'
    });
  });
});
