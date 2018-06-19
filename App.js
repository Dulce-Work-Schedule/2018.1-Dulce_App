import React from 'react';
import LoginNavigator from './src/Navigators/LoginNavigator';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {

  render() {
    return (
      <Root>
        <Provider store={store}>
          <LoginNavigator />
        </Provider>
      </Root>
    );
  }
}
export default App;
