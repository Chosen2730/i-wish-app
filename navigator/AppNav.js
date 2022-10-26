import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../navigator/AuthStack";
import AppStack from "../navigator/AppStack";
import { useGlobalContext } from "../AuthContext";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppNav = () => {
  const { isLoading, userToken } = useGlobalContext();

  if (isLoading) {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
export default AppNav;
