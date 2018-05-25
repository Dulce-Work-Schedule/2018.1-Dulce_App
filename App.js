import React from 'react';
import LoginNavigator from './src/Navigators/LoginNavigator';
import {Provider} from 'react-redux';
import WeekSchedule from './src/Screens/WeekSchedule'
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <WeekSchedule />
    );
  }
}

export default App;
