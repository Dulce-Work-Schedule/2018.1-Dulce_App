import { createStore, combineReducers } from 'redux';
import currentUser from './currentUser';

const reducers = combineReducers({
  currentUser: currentUser
});


const store = createStore(reducers);

export default store;
