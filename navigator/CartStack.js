import React from "react";

import HomeScreen from "../screens/HomeScreen/homeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CartItems from "../screens/Cart/cartItems";
import Store from "../screens/Cart/store";
import AddToCart from "../screens/Cart/addToCart";
import ViewCart from "../screens/Cart/viewCart";

const CartStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        // options={{ presentation: "modal" }}
        name='Orders'
        component={CartItems}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name='Store'
        component={Store}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name='AddToCart'
        component={AddToCart}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name='ViewCart'
        component={ViewCart}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
