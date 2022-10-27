import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckoutPay = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView className='flex-1 px-4'>
      <View className='flex-row items-center'>
        <View className='py-4'>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => navigation.goBack()}
          >
            <AntDesign name='left' size={20} color='black' />
            <Text className='text-base ml-2'>Back</Text>
          </TouchableOpacity>
        </View>
        <Text className='text-2xl font-semibold text-center  ml-12'>
          Checkout
        </Text>
      </View>
      <View className='flex-row items-center justify-between'>
        <View className='bg-purple-800 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>1</Text>
        </View>
        <View className='h-[2px] w-[35%] bg-gray-400' />
        <View className='bg-purple-800 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>2</Text>
        </View>
        <View className='h-[2px] w-[35%] bg-gray-400' />
        <View className='bg-purple-800 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>3</Text>
        </View>
      </View>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <Text className='text-lg font-semibold my-5'>Payment Method</Text>

        <TouchableOpacity className='bg-purple-800 p-4 rounded-md flex-row items-center my-2'>
          <Image
            source={require("./../../assets/images/cart-icon.png")}
            className='w-5 h-5 mr-4'
          />
          <Text className='text-center text-white text-base font-normal'>
            Use My Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-blue-700 p-4 rounded-md flex-row items-center my-2'>
          <Image
            source={require("./../../assets/images/paystack.png")}
            className='w-5 h-5 mr-4'
          />
          <Text className='text-center text-white text-base font-normal'>
            paystack
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center justify-center my-6'>
          <View className='w-[45%] h-[2px] bg-gray-400' />
          <Text className='w-[10%] text-center text-base'>OR</Text>
          <View className='w-[45%] h-[2px] bg-gray-400' />
        </View>

        <Text className='text-base mt-4'>Cardholder Name</Text>
        <TextInput
          keyboardType='name-phone-pad'
          className='bg-gray-200 rounded-md my-2 p-3 mb-4'
        />
        <Text className='text-base'>Card Number</Text>
        <TextInput
          keyboardType='number-pad'
          className='bg-gray-200 rounded-md my-2 p-3 mb-4'
        />
        <View className='flex-row mt-4 justify-between'>
          <View className='w-[48%]'>
            <Text className='text-base'>Exp Date</Text>
            <TextInput
              placeholder='03/22'
              className='bg-gray-200 rounded-md my-2 p-3 mb-4 w-full'
            />
          </View>
          <View className='w-[48%]'>
            <Text className='text-base'>CVV</Text>
            <TextInput
              placeholder='123'
              keyboardType='number-pad'
              className='bg-gray-200 rounded-md my-2 p-3 mb-4 w-full'
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        className='bg-purple-800 p-5 rounded-md my-8'
        onPress={() => navigation.navigate("ReviewCart")}
      >
        <Text className='text-center text-white'>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutPay;
