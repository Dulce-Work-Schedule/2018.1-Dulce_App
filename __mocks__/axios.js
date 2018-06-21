import {data} from './api_data.json';

const USERS_LIST_ENDPOINT = 'http://localhost:8083/api/userManager/listUser';
const EMPLOYEE_PROFILE_ENDPOINT = 'http://localhost:8083/api/userManager/listById/?id=';
const EDIT_USER_ENDPOINT = 'http://localhost:8083/api/userManager/editUser/?id=';
const EDIT_USER_SAVE_ENDPOINT = 'http://localhost:8083/api/userManager/editUser/?id=';
const LOGIN_ENDPOINT = 'http://52.67.4.137:8083/api/user/login';
const SCHEDULES_ENDPOINT = 'http://172.18.0.1:8091/api/schedule/listYear';
const NEW_USER_ENDPOINT = 'http://52.67.4.137:8083/api/user/create';

module.exports = {
  get: jest.fn((url) => {
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
