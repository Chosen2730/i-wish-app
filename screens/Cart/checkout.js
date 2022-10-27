import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Checkout = ({ navigation }) => {
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
        <View className='bg-purple-800 opacity-50 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>2</Text>
        </View>
        <View className='h-[2px] w-[35%] bg-gray-400' />
        <View className='bg-purple-800 opacity-50 w-[10%] h-10 justify-center items-center rounded-full'>
          <Text className='text-center text-white'>3</Text>
        </View>
      </View>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <Text className='text-lg font-semibold my-5'>Contact Information</Text>
        <Text className='text-base'>Name</Text>
        <TextInput
          keyboardType='name-phone-pad'
          className='bg-gray-200 rounded-md my-2 p-3 mb-4'
        />
        <Text className='text-base'>Email</Text>
        <TextInput
          keyboardType='email-address'
          className='bg-gray-200 rounded-md my-2 p-3 mb-4'
        />
        <Text className='text-base'>Mobile Number (Optional)</Text>
        <TextInput
          keyboardType='number-pad'
          className='bg-gray-200 rounded-md my-2 p-3 mb-4'
        />
        <Text className='italic -mt-2'>
          In case we need to contact you for your order
        </Text>
      </ScrollView>
      <TouchableOpacity
        className='bg-purple-800 p-4 rounded-md my-8'
        onPress={() => navigation.navigate("CheckoutDel")}
      >
        <Text className='text-center text-white'>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;
