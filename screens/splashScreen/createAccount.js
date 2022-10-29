import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CreateAccount = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView className='flex-1 p-4'>
        <View className='flex-row justify-between items-center'>
          <Text className='font-bold text-xl text-gray-800'>
            Create Account
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccountForm")}
          >
            <View className='flex-row ml-auto items-center'>
              <Text className='text-base mr-2'>Skip</Text>
              <AntDesign name='right' size={20} color='black' />
            </View>
          </TouchableOpacity>
        </View>
        <View className='items-center justify-center mt-5'>
          <Image
            source={require("./../../assets/images/onboard4.png")}
            className='w-32 h-32 my-5'
          />
          <Text className='text-lg font-bold my-4'>Sign-up as a Wisher</Text>
          <Text className='text-base'>
            When you signup as a wisher, you get to select and create unlimited
            wishlist or select from our online store
          </Text>
          <TouchableOpacity
            className='bg-purple-800 w-full rounded-md p-5 my-5'
            onPress={() => navigation.navigate("Signin")}
          >
            <Text className='text-white text-center text-sm'>
              Continue as a wisher
            </Text>
          </TouchableOpacity>
        </View>
        <View className='items-center justify-center'>
          <Image
            source={require("./../../assets/images/cart.png")}
            className='w-32 h-32 my-5'
          />
          <Text className='text-lg font-bold my-4'>Sign-up as a Vendor</Text>
          <Text className='text-base'>
            Become a vendor on iwish online store and get to showcase your items
            with ease
          </Text>
          <TouchableOpacity
            className='bg-purple-800 w-full rounded-md p-5 my-5'
            onPress={() => navigation.navigate("Signin")}
          >
            <Text className='text-white text-center text-sm'>
              Continue as a Vendor
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;
