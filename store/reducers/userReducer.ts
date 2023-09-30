interface LoginData {
  email: string;
  password: string;
}

interface LoginSuccessResponse {
  success: true;
  message: string;
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface LoginErrorResponse {
  success: false;
  message: string;
}

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

const initialState: UserState = {
  isLoggedIn: false,
  id: undefined,
  email: "",
  firstName: "",
  lastName: "",
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "user/login":
      if (action.payload.success) {
        const { email, firstName, lastName } = action.payload.data;
        return {
          ...state,
          isLoggedIn: true,
          email,
          firstName,
          lastName,
        };
      } else {
        return state;
      }
    case "user/logout":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
