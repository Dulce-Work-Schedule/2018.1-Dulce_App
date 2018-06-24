export const SETPROFILE = 'SETPROFILE';
export const RESETPROFILE = 'RESETPROFILE';

export function actionSetProfile(currentProfile) {
  return {
    type: SETPROFILE,
    currentProfile: currentProfile
  };
}

export function actionResetProfile() {
  return {
    type: RESETPROFILE,
    currentProfile: {}
  };
}
