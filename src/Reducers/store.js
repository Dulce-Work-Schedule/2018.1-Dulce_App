import {createStore, combineReducers} from 'redux';
import currentUser from './currentUser';
import currentProfile from './currentProfile';

const reducers = combineReducers({
  currentUser: currentUser,
  currentProfile: currentProfile
});

const store = createStore(reducers);

export default store;
