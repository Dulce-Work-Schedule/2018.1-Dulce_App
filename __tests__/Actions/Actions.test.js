import {actionLogin, actionLogout} from '../../src/Actions/currentUser';
import {LOGIN, LOGOUT} from '../../src/Actions/currentUser';
import {actionSetProfile, actionResetProfile} from '../../src/Actions/currentProfile';
import {SETPROFILE, RESETPROFILE} from '../../src/Actions/currentProfile';

describe('actions', () => {
  it('should create a action to login',() => {

    const currentUser = {
      token: 'test_user'
    };

    const expectedActionLogin = {
      currentUser,
      type: LOGIN
    };

    expect(actionLogin(currentUser)).toEqual(expectedActionLogin);
  });

  it('should set a logout action', () => {
    const currentUser = {};

    const expectedActionLogout = {
      currentUser,
      type: LOGOUT
    };
    expect(actionLogout()).toEqual(expectedActionLogout);
  });
});

describe('actions profile', () => {
  it('should create a action to setprofile',() => {

    const currentProfile = {
      id: 40028922,
      registration: 160111612,
      sector: 'Portal',
      hospital: 'Lappis'
    };

    const expectedActionSetProfile = {
      currentProfile,
      type: SETPROFILE
    };
    expect(actionSetProfile(currentProfile)).toEqual(expectedActionSetProfile);
  });

});

it('should set a reset profile action', () => {
  const currentProfile = {};

  const expectedActionResetProfile = {
    currentProfile,
    type: RESETPROFILE
  };
  expect(actionResetProfile()).toEqual(expectedActionResetProfile);
});
