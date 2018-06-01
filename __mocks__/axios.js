import {data as users} from './users.json';

const USERS_LIST_ENDPOINT = 'http://localhost:8083/api/userManager/listUser';
const EMPLOYEE_PROFILE_ENDPOINT = 'http://localhost:8083/api/userManager/listById/?id=1';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case USERS_LIST_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case EMPLOYEE_PROFILE_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      default:
        return Promise.resolve({
          data: {message: '404 data not found'}
        });
    }
  })
};
