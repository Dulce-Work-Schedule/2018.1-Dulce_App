export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function actionLogin (currentUser){
  return {
    type: LOGIN,
    currentUser: currentUser
  };
}

export function actionLogout (){
  return{
    type: LOGOUT,
    currentUser: {}
  };
}
