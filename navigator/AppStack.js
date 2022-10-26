import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/customDrawer";
import OrderScreen from "../screens/HomeScreen/orderScreen";
import InviteScreen from "../screens/HomeScreen/inviteScreen";
import BecomeVendorScreen from "../screens/HomeScreen/becomeVendorScreen";
import HelpScreen from "../screens/HomeScreen/helpScreen";
import FaqScreen from "../screens/HomeScreen/faqScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TabStack from "./tabStack";
import CartStack from "./CartStack";

const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#E5E0E9",
        drawerInactiveBackgroundColor: "#fff",
        drawerActiveTintColor: "black",
        drawerLabelStyle: {
          marginLeft: -10,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='Profile'
        component={TabStack}
        options={{
          drawerIcon: () => (
            <AntDesign name='user' size={24} color={"#7805A7"} />
          ),
        }}
      />
      <Drawer.Screen
        name='My Orders'
        component={CartStack}
        options={{
          drawerIcon: () => {
            return (
              <MaterialCommunityIcons
                name='file-document-multiple-outline'
                size={24}
                color='#7805A7'
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name='Invite a friend'
        component={InviteScreen}
        options={{
          drawerIcon: () => <Feather name='users' size={24} color='#7805A7' />,
        }}
      />
      <Drawer.Screen
        name='FAQs'
        component={FaqScreen}
        options={{
          drawerIcon: () => (
            <Octicons name='question' size={24} color='#7805A7' />
          ),
        }}
      />
      <Drawer.Screen
        name='Help'
        component={HelpScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name='ios-help' size={24} color='#7805A7' />
          ),
        }}
      />
      <Drawer.Screen
        name='Become a Vendor'
        component={BecomeVendorScreen}
        options={{
          drawerIcon: () => <Entypo name='shop' size={24} color='#7805A7' />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
