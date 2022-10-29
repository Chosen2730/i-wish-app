import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalContext } from "../../AuthContext";
import FormInput from "../../components/formInput";

const Signin = ({ navigation }) => {
  const { setPassword, setEmail, handleSignin, error, waiting } =
    useGlobalContext();
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
        <TouchableOpacity className='flex-row border-2 border-gray-600 p-3 px-6 items-center justify-center rounded-lg'>
          <Image
            className='w-6 h-6 flex mr-4'
            source={require("./../../assets/images/google.png")}
          />
          <Text className='text-sm'>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row border-2 border-gray-600 p-3 px-6 items-center justify-center rounded-lg'>
          <Image
            className='w-6 h-6 flex mr-4'
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
      <FormInput
        type='email-address'
        label='Email'
        inputHandler={(val) => setEmail(val)}
      />
      <FormInput
        password
        label='Password'
        inputHandler={(val) => setPassword(val)}
      />
      {error && <Text className='mt-2 text-xs text-red-500'>{error}</Text>}

      <View className='relative'>
        <Text className='text-sm italic underline text-gray-400'>
          Forgot Password?
        </Text>
        <TouchableOpacity
          className='bg-purple-800 w-full rounded-md p-4 my-8'
          onPress={handleSignin}
        >
          {waiting ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
            <Text className='text-white text-center text-sm'>Sign In</Text>
          )}
        </TouchableOpacity>
        <Text className='text-sm text-center my-4'>
          Don't have an account?{" "}
          <Text
            className='text-purple-800 underline'
            onPress={() => navigation.navigate("CreateAccountForm")}
          >
            Sign up
          </Text>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
