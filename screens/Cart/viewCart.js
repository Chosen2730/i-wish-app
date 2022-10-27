import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import SingleCartItem from "../../components/singleCartItem";

const ViewCart = ({ navigation }) => {
  const { cartItems, total } = useGlobalContext();
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='p-4'>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => navigation.goBack()}
          >
            <AntDesign name='left' size={20} color='black' />
            <Text className='text-base ml-2'>Back</Text>
          </TouchableOpacity>
          <Text className='my-4 text-2xl font-semibold'>View Cart</Text>
        </View>
        <ScrollView className='flex-1'>
          <View className='p-4'>
            {cartItems.map((item, i) => {
              return <SingleCartItem key={i} id={i} {...item} />;
            })}
          </View>
        </ScrollView>
        <View className='p-4'>
          <Text className='text-lg font-semibold'>
            Got an i-wish voucher? Use it below:
          </Text>
          <View className='flex-row p-1 my-4 rounded-md bg-gray-200'>
            <TextInput placeholder='Input voucher code' className='w-[55%]' />
            <View className='bg-purple-800 p-4 px-8 rounded-md ml-auto w-[45%]'>
              <Text className='text-white'>Use Voucher</Text>
            </View>
          </View>
          <Text className='text-lg font-bold mt-10'>Product Details</Text>
          <View className='flex-row justify-between my-1'>
            <Text className='text-base font-medium'>Subtotal</Text>
            <Text className='text-base'>N {total}</Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='text-base font-medium'>Discount</Text>
            <Text className='text-base'>0%</Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='text-base font-medium'>Shipping</Text>
            <Text className='text-base'>N 5000</Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='text-base font-medium'>Total Order</Text>
            <Text className='text-base'>N {total + 5000}</Text>
          </View>
          <TouchableOpacity
            className='bg-purple-800 p-5 rounded-md my-8'
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text className='text-center text-white'>Continue</Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Store")}
            className='text-purple-800 font-semibold text-center text-base mb-8'
          >
            Buy More Item
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewCart;
