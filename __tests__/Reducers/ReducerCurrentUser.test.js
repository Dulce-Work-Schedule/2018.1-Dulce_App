import reducer from '../../src/Reducers/currentUser';
import {LOGIN, LOGOUT} from '../../src/Actions/currentUser';

const currentUser = {
  token: 'test'
};

describe('currentUser reducer', () => {
  it('should return the initial state',() => {
    expect(reducer(void 0,{})).toEqual({logged_in: false});
  });

  it('should handle the LOGIN action', () => {
    expect(
      reducer(currentUser,{
        type: LOGIN,
        currentUser: currentUser
      })
    ).toEqual({
      token: 'test'
    });
  });

  it('should handle the LOGOUT action', () => {
    expect(
      reducer(currentUser,{
        type: LOGOUT,
        currentUser: {}
      })
    ).toEqual({logged_in: false});
  });
});
