import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../screens/auth/LoginPage";
import SignupPage from "../screens/auth/SignupPage";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Stack = createStackNavigator();
interface AuthStackInterface {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
const AuthStack: React.FC<AuthStackInterface> = ({ setIsLoggedIn }) => {
  const { user } = useSelector((state: RootState) => state);
  useEffect(() => {
    setIsLoggedIn(user.isLoggedIn);
  }, [user]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
