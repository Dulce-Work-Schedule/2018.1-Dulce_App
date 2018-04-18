import {actionLogin, actionLogout} from '../src/Actions/currentUser';
import {LOGIN, LOGOUT} from '../src/Actions/currentUser';

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
