import {data as users} from './users.json';

const USERS_LIST_ENDPOINT = 'http://localhost:8083/api/userManager/listUser';
const EMPLOYEE_PROFILE_ENDPOINT = 'http://localhost:8083/api/userManager/listById/?id=1';
const EDIT_USER_ENDPOINT = 'http://172.18.0.1:8083/api/userManager/editUser/?id=1';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case USERS_LIST_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case EMPLOYEE_PROFILE_ENDPOINT:
        return Promise.resolve({
          data: users.id(1)
        });
      case EDIT_USER_ENDPOINT:
        return Promise.resolve({
          data: users.id(1)
        });
      default:
        return Promise.resolve({
          data: {message: '404 data not found'}
        });
    }
  })
};
