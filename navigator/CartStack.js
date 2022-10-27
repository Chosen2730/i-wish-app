import React from "react";

import HomeScreen from "../screens/HomeScreen/homeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CartItems from "../screens/Cart/cartItems";
import Store from "../screens/Cart/store";
import AddToCart from "../screens/Cart/addToCart";
import ViewCart from "../screens/Cart/viewCart";
import Checkout from "../screens/Cart/checkout";
import CheckoutDel from "../screens/Cart/checkoutDel";
import CheckoutPay from "../screens/Cart/checkoutPay";
import ReviewCart from "../screens/Cart/reviewCart";
import PaymentSuccess from "../screens/Cart/paymentSuccess";
import OrderDetails from "../screens/Cart/orderDetails";
// import { useGlobalContext } from "../AuthContext";

const CartStack = () => {
  // const { cartItems } = useGlobalContext();
  // const cartLenght = cartItems.length;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={`${cartLenght > 1 ? "ViewCart" : "Order"}`}
    >
      {/* {cartLenght < 1 &&  */}
      <Stack.Screen name='Orders' component={CartItems} />
      {/* } */}
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
      <Stack.Screen name='Checkout' component={Checkout} />
      <Stack.Screen name='CheckoutDel' component={CheckoutDel} />
      <Stack.Screen name='CheckoutPay' component={CheckoutPay} />
      <Stack.Screen name='ReviewCart' component={ReviewCart} />
      <Stack.Screen name='PaymentSuccess' component={PaymentSuccess} />
      <Stack.Screen name='OrderDetails' component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default CartStack;
