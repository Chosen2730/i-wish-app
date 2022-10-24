import { View, Text, Image } from "react-native";
import React from "react";

const OnBoardingSlide = ({ desc, children }) => {
  return (
    <View>
      {children}
      <Text className='my-5 text-sm'>{desc}</Text>
    </View>
  );
};

export default OnBoardingSlide;
