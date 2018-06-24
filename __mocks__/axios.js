import {data} from './api_data.json';

const USERS_LIST_ENDPOINT = 'http://localhost:8083/api/userManager/listUser';
const EMPLOYEE_PROFILE_ENDPOINT = 'http://localhost:8083/api/userManager/listById/?id=';
const EDIT_USER_ENDPOINT = 'http://localhost:8083/api/userManager/editUser/?id=';
const EDIT_USER_SAVE_ENDPOINT = 'http://localhost:8083/api/userManager/editUser/?id=';
const LOGIN_ENDPOINT = 'http://52.67.4.137:8083/api/user/login';
const SCHEDULES_ENDPOINT = 'http://172.18.0.1:8091/api/schedule/listYear';
const NEW_USER_ENDPOINT = 'http://52.67.4.137:8083/api/user/create';
const AXIOS_PROFILE = 'http://18.231.9.190:8083/api/profile/view/?profile_id=1';
const AXIOS_PROFILE_U = 'http://18.231.9.190:8083/api/profile/view/?profile_id=undefined';
const AXIOS_USER = 'http://52.67.4.137:8083/api/user/listById?id=1';
const AXIOS_USER_U = 'http://52.67.4.137:8083/api/user/listById?id=undefined';
const AXIOS_USER_ = 'http://52.67.4.137:8083/api/user/listById?id=';
const SECTOR_SCHEDULE = 'http://18.231.80.185:8083/api/schedule/listYearBySector?sector_id=';
const PROFILE_SCHEDULE = 'http://18.231.80.185:8083/api/schedule/listYearByProfile?profile_id=';
const NO_SCHEDULES = 'noSchedule';

module.exports = {
  get: jest.fn((url) => {
    console.log(url);
    switch (url) {
      case USERS_LIST_ENDPOINT:
        return Promise.resolve({
          data: data.users
        });
      case LOGIN_ENDPOINT:
        return Promise.resolve({
          data: data.users
        });
      case EMPLOYEE_PROFILE_ENDPOINT:
        return Promise.resolve({
          data: data.users
        });
      case EDIT_USER_ENDPOINT:
        return Promise.resolve({
          data: data.users
        });
      case SCHEDULES_ENDPOINT:
        return Promise.resolve({
          data: data.schedules
        });
      case AXIOS_USER:
        console.log('foi user');
        return Promise.resolve({
          data: data.users[1]
        });
      case AXIOS_PROFILE:
        console.log('foi profile');
        return Promise.resolve({
          data: data.profiles[1]
        });
      case AXIOS_USER_U:
        console.log('foi user');
        return Promise.resolve({
          data: data.users[1]
        });
      case AXIOS_USER_:
        console.log('foi user');
        return Promise.resolve({
          data: data.users[1]
        });
      case AXIOS_PROFILE_U:
        console.log('foi profile');
        return Promise.resolve({
          data: data.profiles[1]
        });
      case SECTOR_SCHEDULE:
        return Promise.resolve({
          data: data.scheduleSector
        });
      case PROFILE_SCHEDULE:
        return Promise.resolve({
          data: data.scheduleProfiles
        });
      case NO_SCHEDULES:
        return Promise.resolve({
          data: data.schedules
        });
      default:
        return Promise.resolve({
          data: {message: '404 data not found'}
        });
    }
  }),
  post: jest.fn((url) => {
    switch (url) {
      case LOGIN_ENDPOINT:
        return Promise.resolve({
          data: data.errors
        });
      case NEW_USER_ENDPOINT:
        return Promise.resolve({
          data: data.errors
        });

      case EDIT_USER_SAVE_ENDPOINT:
        return Promise.resolve({});

      default:
        return Promise.resolve({
          data: {message: '404 data not found'}
        });
    }
  })
};
