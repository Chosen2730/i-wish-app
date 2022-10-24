import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/splashScreen/onboarding";
import { NavigationContainer } from "@react-navigation/native";
import CreateAccount from "./screens/splashScreen/createAccount";
import CreateAccountForm from "./screens/splashScreen/createAccountForm";
import OTPValidation from "./screens/splashScreen/otpValidation";
import Signin from "./screens/splashScreen/signin";
import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen/homeScreen";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={CreateAccount}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='CreateAccountForm'
          component={CreateAccountForm}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='Signin'
          component={Signin}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='OTPValidation'
          component={OTPValidation}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
