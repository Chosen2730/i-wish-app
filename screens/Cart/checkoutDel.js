import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckoutDel = ({ navigation }) => {
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
        <View className='bg-purple-800 opacity-50 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>3</Text>
        </View>
      </View>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <Text className='text-lg font-semibold my-5'>Delivery Information</Text>
        <Text className='text-base'>Delivery Option</Text>
        <View className='flex-row p-2 items-center rounded-md border-2 border-purple-800 w-[35%] justify-center my-2'>
          <MaterialCommunityIcons name='door' size={24} color='#7805A7' />
          <Text className='text-sm text-purple-800'>Doorstep</Text>
        </View>
        <Text className='mt-4 text-lg font-semibold my-2'>
          Estimated Delivery Day
        </Text>
        <Text className='text-base'>
          Your order is estimated to arrive in 5 working days
        </Text>
        <View className='flex-row mt-4 justify-between'>
          <View className='w-[48%]'>
            <Text className='text-base'>State</Text>
            <TextInput className='bg-gray-200 rounded-md my-2 p-3 mb-4 w-full' />
          </View>
          <View className='w-[48%]'>
            <Text className='text-base'>Zip Code</Text>
            <TextInput
              keyboardType='number-pad'
              className='bg-gray-200 rounded-md my-2 p-3 mb-4 w-full'
            />
          </View>
        </View>

        <Text className='text-base'>Delivery Address</Text>
        <TextInput className='bg-gray-200 rounded-md my-2 p-3 mb-4' />
        <View className='flex-row gap-2'>
          <Checkbox
            className='rounded-md border-purple-800'
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text className='italic'>Save information for future purchase</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        className='bg-purple-800 p-5 rounded-md my-8'
        onPress={() => navigation.navigate("CheckoutPay")}
      >
        <Text className='text-center text-white'>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutDel;
