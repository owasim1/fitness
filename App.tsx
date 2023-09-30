import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./store";
import AuthStack from "./navigation/AuthStack";
import MainTabNavigator from "./navigation/MainTabNavigator";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <MainTabNavigator />
          ) : (
            <AuthStack setIsLoggedIn={setIsLoggedIn} />
          )}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
