import reducer from '../src/Reducers/currentUser'
import {actionLogin, actionLogout} from '../src/Actions/currentUser'
import {LOGIN, LOGOUT} from '../src/Actions/currentUser'

describe('currentUser reducer', () =>{
  it('should return the initial state',() => {
    const currentUser = {
      token: "test"
    };
    expect(reducer(undefined,{})).toEqual({})
  })

  it('should handle the LOGIN action', () => {
    const currentUser = {
      token: "test"
    };
    expect(
      reducer(currentUser,{
        type: LOGIN,
        currentUser: currentUser
      })
    ).toEqual({
      token: "test"
    })
  })

  it('should handle the LOGOUT action', () => {
    const currentUser ={
      token: "test"
    };
    expect(
      reducer(currentUser,{
        type:LOGOUT,
        currentUser:{}
      })
    ).toEqual({})
  })
})
