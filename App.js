import React from 'react';
import LoginNavigator from './src/Navigators/LoginNavigator';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

String.prototype.padStart = function padStart(x, y) {
  if (this.length < x) {
    return (y.toString().repeat((x - this.length))) + this;
  } else {
    return this.toString();
  }
};

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
