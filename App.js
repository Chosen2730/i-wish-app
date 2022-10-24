import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStack from "./navigator/onboardingStack";
import HomeStack from "./navigator/homeStack";

export default function App() {
  return (
    <NavigationContainer>
      {/* <OnboardingStack /> */}
      <HomeStack />
    </NavigationContainer>
  );
}
