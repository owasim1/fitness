import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AccountScreen from "../screens/AccountScreen";
import AuthStack from "./AuthStack";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          } else if (route.name === "Account") {
            iconName = "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
      <MainTab.Screen name="Account" component={AccountScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
