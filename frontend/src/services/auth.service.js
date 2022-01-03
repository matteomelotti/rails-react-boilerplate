import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(email, password) {
    return api
      .post('/users/login', {
        user: {
          email,
          password
        }
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(username, email, password) {
    return api.post('/users', {
      user: {
        username,
        email,
        password
      }
    });
  }
}

export default new AuthService();