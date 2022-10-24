import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./profile";
import Dashboard from "./dashboard";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Dashboard' component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
