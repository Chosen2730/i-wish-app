import React from "react";

import HomeScreen from "../screens/HomeScreen/homeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PopuplarScreen from "../screens/HomeProfile/popularScreen";
import WishListScreen from "../screens/HomeProfile/wishlishScreen";
import MyWishList from "../screens/HomeProfile/myWishlistScreen";
import SingleSCategory from "../screens/HomeProfile/singleSCategory";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Base' component={HomeScreen} />
      <Stack.Screen name='Popular Categories' component={PopuplarScreen} />
      <Stack.Screen name='Single Category' component={SingleSCategory} />
      <Stack.Screen name='Wishlist Items' component={WishListScreen} />
      <Stack.Screen name='My Wishlist' component={MyWishList} />
    </Stack.Navigator>
  );
};

export default HomeStack;
