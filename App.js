import React from 'react';
import ScheduleNavigation from './src/Navigators/ScheduleNavigation';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ScheduleNavigation />
      </Provider>
    );
  }
}

export default App;
