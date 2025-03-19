interface AuthCredentials {
  login: string;
  password: string;
}


class AuthService {
  static saveIsAuthToLs(isAuth: boolean): void {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }

  static getIsAuthFromLs(): boolean | null {
    const isAuth = localStorage.getItem("isAuth");
    return isAuth ? JSON.parse(isAuth) : null;
  }

  static removeFromLs(): void {
    localStorage.removeItem("isAuth");
  }

  static isLoginUserValid(login: string, 
    password: string, 
    AUTH_CREDENTIALS: AuthCredentials
  ): boolean {
    return (
      AUTH_CREDENTIALS.login === login && AUTH_CREDENTIALS.password === password
    );
  }
}
export default AuthService;
