import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Onboarding = () => {
  return (
    <SafeAreaView className='flex-1 p-4'>
      <View className='flex-row ml-auto items-center'>
        <Text className='text-base mr-2'>Skips</Text>
        <AntDesign name='right' size={20} color='black' />
      </View>
      <Image
        className='w-full h-72 my-20'
        source={require("./../../assets/images/onboard1.png")}
      />
      <Text className='text-4xl font-bold'>
        Create and manage <Text className='text-purple-800'>wishlists</Text>{" "}
      </Text>

      <Text className='my-5 text-sm'>
        Have a list of wishes you want granted by your loved ones? Start
        creating tonnes of wishlists with ease.
      </Text>
      <TouchableOpacity className='bg-purple-800 w-fit rounded-md p-4 flex flex-row items-center justify-center my-5'>
        <Text className='text-white text-center text-lg mr-5'>
          Next Feature
        </Text>
        <AntDesign name='arrowright' size={24} color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
