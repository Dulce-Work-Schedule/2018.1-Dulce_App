// import React from 'react';
// import LoginNavigator from './src/Navigators/LoginNavigator';
// import {Provider} from 'react-redux';
// import store from './src/Reducers/store';
// store.subscribe(() => {
//   console.log(store.getState());
// });
//
// class App extends React.Component {
//
//   render() {
//     return (
//       <Provider store={store}>
//         <LoginNavigator />
//       </Provider>
//     );
//   }
// }
//
// export default App;


import React from 'react';
import ScheduleNavigation from './src/Navigators/ScheduleNavigation';

class App extends React.Component {

  render() {
    return (
      <ScheduleNavigation />
    );
  }
}

export default App;
