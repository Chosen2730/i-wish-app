import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import OnBoardingSlide from "./onBoardingSlide";
import { useGlobalContext } from "../../AuthContext";

const Onboarding = ({ navigation }) => {
  const { login } = useGlobalContext();
  const [pressedIndex, setPressedIndex] = useState(0);
  const screenHandler = () => {
    if (pressedIndex === 2) {
      navigation.push("CreateAccount");
    } else
      setPressedIndex((n) => {
        const newIndex = n + 1;
        if (newIndex > 2) {
          return null;
        }
        return newIndex;
      });
  };

  const screens = ["", "", ""];
  return (
    <SafeAreaView className='flex-1 p-4'>
      <ScrollView>
        <TouchableOpacity
          className='flex-row ml-auto items-center'
          onPress={() => navigation.push("CreateAccount")}
        >
          <Text className='text-base mr-2'>Skip</Text>
          <AntDesign name='right' size={20} color='black' />
        </TouchableOpacity>

        {pressedIndex === 0 ? (
          <OnBoardingSlide
            desc=' Have a list of wishes you want granted by your loved ones? Start
        creating tonnes of wishlists with ease.'
          >
            <Image
              className='w-full h-72 my-20'
              source={require("./../../assets/images/onboard1.png")}
            />
            <Text className='text-4xl font-bold'>
              Create and manage{" "}
              <Text className='text-purple-800'>wishlists</Text>{" "}
            </Text>
          </OnBoardingSlide>
        ) : pressedIndex === 1 ? (
          <OnBoardingSlide desc='Grant loved ones their w.ishes through our list of special wish items'>
            <Image
              className='w-full h-72 my-20'
              source={require("./../../assets/images/onboard2.png")}
            />
            <Text className='text-4xl font-bold'>
              <Text className='text-purple-800'>Shop</Text> from our wishlist
              store
            </Text>
          </OnBoardingSlide>
        ) : (
          <OnBoardingSlide desc='Experience a unique packaging experience through our virtual gift boxing app and get it delivered to you or your loved ones.'>
            <Image
              className='w-full h-72 my-20'
              source={require("./../../assets/images/onboard3.png")}
            />
            <Text className='text-4xl font-bold'>
              <Text className='text-purple-800'>Gift boxing</Text> feature
            </Text>
          </OnBoardingSlide>
        )}

        <View className='flex-row gap-2 justify-center mt-4'>
          {screens.map((item, i) => {
            return (
              <View
                className={`${
                  pressedIndex === i ? "w-6" : "w-2"
                } h-2 bg-purple-800 rounded-md`}
                key={i}
                // onPress={() => setPressedIndex(i)}
              />
            );
          })}
        </View>
        <TouchableOpacity
          className='bg-purple-800 w-fit rounded-md p-4 flex flex-row items-center justify-center my-5'
          onPress={() => screenHandler(pressedIndex)}
        >
          <Text className='text-white text-center text-lg mr-5'>
            Next Feature
          </Text>
          <AntDesign name='arrowright' size={24} color='white' />
        </TouchableOpacity>

        {pressedIndex === 2 && (
          <View>
            <Text
              className='text-center my-2 text-purple-800 text-base font-bold'
              onPress={() => login()}
            >
              Explore First
            </Text>
            <Text className='text-center text-gray-400 text-sm'>
              Already have an account?{" "}
              <Text className='text-purple-800 underline'>Login</Text>{" "}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
