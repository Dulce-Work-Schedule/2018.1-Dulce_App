import React from 'react';
import NewUserNavigator from './src/Navigators/NewUserNavigator';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NewUserNavigator />
      </Provider>
    );
  }
}

export default App;
