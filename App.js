import React from 'react';
import VacationScreen from './src/Screens/VacationScreen';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <VacationScreen />
      </Provider>
    );
  }
}

export default App;
