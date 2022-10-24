import React from "react";
import CreateAccount from "../screens/splashScreen/createAccount";
import CreateAccountForm from "../screens/splashScreen/createAccountForm";
import OTPValidation from "../screens/splashScreen/otpValidation";
import Signin from "../screens/splashScreen/signin";
import HomeScreen from "../screens/HomeScreen/homeScreen";
import Onboarding from "../screens/splashScreen/onboarding";
import { createStackNavigator } from "@react-navigation/stack";

const OnboardingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} />
      <Stack.Screen name='CreateAccountForm' component={CreateAccountForm} />
      <Stack.Screen name='Signin' component={Signin} />
      <Stack.Screen name='OTPValidation' component={OTPValidation} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
