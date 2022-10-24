import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Drawer from "../../drawerNavigator/drawer";
import BottomNav from "../../bottomNavigator/bottomNav";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Drawer />
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
