import React from 'react';
import LoginNavigator from './src/Navigators/LoginNavigator';
<<<<<<< HEAD
import {Root} from 'native-base';
=======
>>>>>>> e0c7a26... #418 atualizando requisiçoes
import {Provider} from 'react-redux';
import store from './src/Reducers/store';
store.subscribe(() => {
  console.log(store.getState());
});

<<<<<<< HEAD


=======
>>>>>>> e0c7a26... #418 atualizando requisiçoes
class App extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      <Root>
        <Provider store={store}>
          <LoginNavigator />
        </Provider>
      </Root>
=======
      <Provider store={store}>
        <LoginNavigator />
      </Provider>
>>>>>>> e0c7a26... #418 atualizando requisiçoes
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e0c7a26... #418 atualizando requisiçoes
