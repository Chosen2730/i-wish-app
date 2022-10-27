import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import SingleCartItem from "../../components/singleCartItem";

const ReviewCart = ({ navigation }) => {
  const { cartItems, total } = useGlobalContext();

  return (
    <SafeAreaView className='flex-1 p-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=''>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => navigation.goBack()}
          >
            <AntDesign name='left' size={20} color='black' />
            <Text className='text-base ml-2'>Back</Text>
          </TouchableOpacity>
          <Text className='my-4 text-2xl font-semibold'>Review Order</Text>
        </View>
        <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
          <View className=''>
            {cartItems.map((item, i) => {
              return <SingleCartItem key={i} id={i} {...item} />;
            })}
          </View>
        </ScrollView>

        <View className=''>
          <View className='my-4'>
            <View className='flex-row justify-between my-1 items-center border-b-[1px] border-gray-300 pb-2'>
              <Text className='text-lg font-semibold'>Address Details</Text>
              <Text className='text-sm font-semibold text-purple-800 '>
                Change Address
              </Text>
            </View>
            <Text className='text-sm'>
              NO.35, Zone A, Alaka street, Obafemi Awolowo Way, Ikeja, Lagos
            </Text>
          </View>
          <View className='my-4'>
            <View className='flex-row justify-between my-1 items-center border-b-[1px] border-gray-300 pb-2'>
              <Text className='text-lg font-semibold'>Address Details</Text>
              <Text className='text-sm font-semibold text-purple-800 '>
                Payment Method
              </Text>
            </View>
            <View className='flex-row items-center bg-gray-200 p-4 rounded-xl my-4'>
              <Image
                source={require("./../../assets/images/master.png")}
                className='w-[61px] h-[48px] mr-4'
              />
              <View>
                <Text className='font-semibold text-base'>
                  Anthony Jonathan
                </Text>
                <Text>xxxx xxxx xxxx 1234</Text>
              </View>
            </View>
          </View>
          <View className=''>
            <Text className='text-lg font-bold'>Estimated Delivery Day</Text>
            <Text className='text-sm'>
              Your order is estimated to arrive in 5 working days
            </Text>
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
        </View>
        <TouchableOpacity
          className='bg-purple-800 p-5 rounded-md my-8'
          onPress={() => navigation.navigate("PaymentSuccess")}
        >
          <Text className='text-center text-white'>Make Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewCart;
