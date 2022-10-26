import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewCart = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text
      // onPress={() => navigation.navigate("Store")}
      >
        ViewCart
      </Text>
    </SafeAreaView>
  );
};

export default ViewCart;
