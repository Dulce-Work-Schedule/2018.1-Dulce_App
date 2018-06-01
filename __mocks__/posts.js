import http from 'axios';

export function fechUserLogin() {
  return http
    .post('http://localhost:8086/api/userManager/login')
    .then((response) => {
      return response.data.success;
    });
}
