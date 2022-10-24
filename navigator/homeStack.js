import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen/homeScreen";
import CustomDrawer from "../components/customDrawer";

const HomeStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
