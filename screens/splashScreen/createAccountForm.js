import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CreateAccountForm = ({ navigation }) => {
  const [isPassWordVisible, setIsPasswordVisible] = useState(true);
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
          <Text>Name</Text>
          <TextInput className='bg-gray-200 p-3 rounded-md my-2' />
          <Text>Email</Text>
          <TextInput
            keyboardType='email-address'
            className='bg-gray-200 p-3 rounded-md my-2'
          />
          <Text>Username</Text>
          <TextInput className='bg-gray-200 p-3 rounded-md my-2' />
          <Text>Mobile Number</Text>
          <TextInput
            keyboardType='number-pad'
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
          </View>
          <TouchableOpacity
            className='bg-purple-800 w-full rounded-md p-4 my-5'
            onPress={() => navigation.push("OTPValidation")}
          >
            <Text className='text-white text-center text-sm'>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row gap-4 items-center justify-center my-1'>
          <View className='w-full h-1 bg-gray-200'></View>
          <Text>OR</Text>
          <View className='w-full h-1 bg-gray-200'></View>
        </View>
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
        <Text className='text-sm text-center my-4'>
          Already have an account?{" "}
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
