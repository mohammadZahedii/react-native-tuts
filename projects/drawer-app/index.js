import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import UsersScreen from "./screens/UsersScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
import HeaderLeft from "./components/headerLeft";

const Drawer = createDrawerNavigator();

const BottomTabs = createBottomTabNavigator();

const DrawerApp = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#4c498e" },
          headerTintColor: "white",

          headerTitleStyle: { fontSize: 26 },
          drawerActiveBackgroundColor: "#cfcfea",
          drawerActiveTintColor: "#4c498e",
          headerLeft: () => <HeaderLeft />,
        }}
      >
        <Drawer.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="home" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="users"
          component={UsersScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="people" size={size} color={color} />;
            },
          }}
        />
      </Drawer.Navigator> */}
      <BottomTabs.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#4c498e" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 26 },
          tabBarActiveTintColor: "#4c498e",
        }}
      >
        <BottomTabs.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" size={size} color={color} />;
            },
          }}
        />
        <BottomTabs.Screen
          name="users"
          component={UsersScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="people" size={size} color={color} />;
            },
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default DrawerApp;

const styles = StyleSheet.create({});
