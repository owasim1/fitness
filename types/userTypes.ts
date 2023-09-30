interface UserState {
  isLoggedIn: boolean;
  id: number | undefined;
  email: string;
  firstName: string;
  lastName: string;
}

interface LoginPayload {
  success: boolean;
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface LoginAction {
  type: "user/login";
  payload: LoginPayload;
}

interface LogoutAction {
  type: "user/logout";
}

type UserAction = LoginAction | LogoutAction;
