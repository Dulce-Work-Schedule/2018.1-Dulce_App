import React from 'react';
import DoctorsNavigator from '../Navigators/DoctorsNavigator';
import {Provider} from 'react-redux';
import store from '../Reducers/store';
import Router from '../Components/routes';

class Doctors extends React.Component{

  render() {
    return(
      <Provider store={store}>
        <DoctorsNavigator />
      </Provider>
    );
  }
}

export default Doctors;
