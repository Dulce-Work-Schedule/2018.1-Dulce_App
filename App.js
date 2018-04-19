import React from 'react';
import MainNavigator from './src/Navigators/MainNavigator';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component{

  render() {
    return(
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
