
import React from 'react';
import LoginNavigator from './src/Navigators/LoginNavigator';
import WeekSchedule from './src/Screens/WeekSchedule';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <WeekSchedule />
      </Provider>
    );
  }
}

export default App;
