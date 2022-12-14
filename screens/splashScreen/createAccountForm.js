import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../../AuthContext";
import FormInput from "../../components/formInput";

const CreateAccountForm = ({ navigation }) => {
  const {
    setName,
    setEmail,
    setUserName,
    setTel,
    setPassword,
    handleSignup,
    error,
    waiting,
    signUpWithGoogle,
  } = useGlobalContext();

  return (
    <SafeAreaView className='flex-1 p-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            className='flex-row ml-auto items-center'
            onPress={() => navigation.push("OTPValidation")}
          >
            <Text className='text-base mr-2'>Skip</Text>
            <AntDesign name='right' size={20} color='black' />
          </TouchableOpacity>
          <Text className='font-bold text-xl text-gray-800'>
            Create Account
          </Text>
          <Text className='text-base my-4'>
            Create an account to enjoy seamless exploration.
          </Text>
        </View>
        <View>
          <FormInput label='Name' inputHandler={(val) => setName(val)} />

          <FormInput
            type='email-address'
            label='Email'
            inputHandler={(val) => setEmail(val)}
          />
          <FormInput
            label='Username'
            inputHandler={(val) => setUserName(val)}
          />

          <FormInput
            label='Mobile Number'
            type='number-pad'
            inputHandler={(val) => setTel(val)}
          />
          <FormInput
            password
            label='Password'
            inputHandler={(val) => setPassword(val)}
          />
          {error && <Text className='mt-2 text-xs text-red-500'>{error}</Text>}
          <TouchableOpacity
            className='bg-purple-800 w-full rounded-md p-5 my-5'
            onPress={handleSignup}
          >
            {waiting ? (
              <ActivityIndicator size='large' color='white' />
            ) : (
              <Text className='text-white text-center text-sm'>
                Create Account
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View className='flex-row gap-4 items-center justify-center my-1'>
          <View className='w-full h-1 bg-gray-200'></View>
          <Text>OR</Text>
          <View className='w-full h-1 bg-gray-200'></View>
        </View>
        <View className='flex-row gap-x-8 items-center justify-center my-5'>
          <TouchableOpacity
            className='flex-row border-2 border-gray-600 p-3 px-6 items-center justify-center rounded-lg'
            onPress={signUpWithGoogle}
          >
            <Image
              className='w-6 h-6 flex mr-2'
              source={require("./../../assets/images/google.png")}
            />
            <Text className='text-sm'>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row border-2 border-gray-600 p-3 px-6 items-center justify-center rounded-lg'>
            <Image
              className='w-6 h-6 flex mr-2'
              source={require("./../../assets/images/facebook.png")}
            />
            <Text className='text-sm'>Facebook</Text>
          </TouchableOpacity>
        </View>
        <Text className='text-sm text-center my-4'>
          Already have an account?
          <Text
            className='text-purple-800 underline'
            onPress={() => navigation.navigate("Signin")}
          >
            Login
          </Text>{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccountForm;
