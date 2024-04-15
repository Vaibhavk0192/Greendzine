import { Redirect } from "expo-router";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Screens/Home/home";
import { StatusBar, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Employee from "./Screens/Employee/employee";
import { Login } from "./Screens/Login/login";
import { FIREBASE_AUTH } from "./fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  if (!user) {
    return <Login />;
  }
  return (
    <NavigationContainer independent={true}>
      <View style={{ flex: 1, backgroundColor: "#0F2323" }}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "person") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#357B40",
            tabBarInactiveTintColor: "#36A54680",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#0F2323",
              height: 55,
              position: "absolute",
              overflow: "hidden",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopWidth: 0,
            },
            tabBarItemStyle: {
              backgroundColor: "#0F2323",
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Tab.Screen name="person" component={Employee}options={{headerShown:false}} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
