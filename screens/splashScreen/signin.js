import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Signin = ({ navigation }) => {
  const [isPassWordVisible, setIsPasswordVisible] = useState(true);
  return (
    <SafeAreaView className='flex-1 p-4'>
      <TouchableOpacity
        className='flex-row mr-auto items-center'
        onPress={() => navigation.goBack()}
      >
        <AntDesign name='left' size={20} color='black' />
        <Text className='text-base mr-2'>Back</Text>
      </TouchableOpacity>
      <Text className='font-bold text-xl text-gray-800 mt-5'>Sign In</Text>
      <Text className='text-base my-4'>
        Login to continue enjoying the seamless exploration
      </Text>
      <View className='flex-row gap-x-8 items-center justify-center my-5'>
        <TouchableOpacity className='flex-row border-2 border-gray-600 p-2 px-4 items-center gap-2 justify-center rounded-lg'>
          <Image
            className='w-6 h-6 flex'
            source={require("./../../assets/images/google.png")}
          />
          <Text className='text-sm'>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row border-2 border-gray-600 p-2 px-4 items-center gap-2 justify-center rounded-lg'>
          <Image
            className='w-6 h-6 flex'
            source={require("./../../assets/images/facebook.png")}
          />
          <Text className='text-sm'>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row gap-4 items-center justify-center my-1'>
        <View className='w-full h-1 bg-gray-200'></View>
        <Text>OR</Text>
        <View className='w-full h-1 bg-gray-200'></View>
      </View>
      <Text>Email</Text>
      <TextInput
        keyboardType='email-address'
        className='bg-gray-200 p-3 rounded-md my-2'
      />
      <Text>Password</Text>
      <View className='relative'>
        <TextInput
          secureTextEntry={isPassWordVisible}
          className='bg-gray-200 p-3 rounded-md my-2'
        />
        <TouchableOpacity
          className='absolute top-5 right-5'
          onPress={() => setIsPasswordVisible(!isPassWordVisible)}
        >
          {isPassWordVisible ? (
            <Ionicons name='eye' size={25} color='#B2B2B2' />
          ) : (
            <Ionicons name='eye-off' size={25} color='#B2B2B2' />
          )}
        </TouchableOpacity>
        <Text className='text-sm italic underline text-gray-400'>
          Forgot Password?
        </Text>
        <TouchableOpacity
          className='bg-purple-800 w-full rounded-md p-4 my-8'
          onPress={() => navigation.push("HomeScreen")}
        >
          <Text className='text-white text-center text-sm'>Sign In</Text>
        </TouchableOpacity>
        <Text className='text-sm text-center my-4'>
          Don't have an account?{" "}
          <Text
            className='text-purple-800 underline'
            onPress={() => navigation.goBack()}
          >
            Sign up
          </Text>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
