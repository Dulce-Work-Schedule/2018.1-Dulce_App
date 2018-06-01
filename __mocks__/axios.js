import {data as users} from './users.json';

const USERS_ENDPOINT = 'http://localhost:8081/users.json';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case USERS_ENDPOINT:
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
