import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const OrderDetails = ({ navigation }) => {
  const { cartItems, total } = useGlobalContext();

  return (
    <SafeAreaView className='flex-1 p-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=''>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => navigation.navigate("Store")}
          >
            <AntDesign name='left' size={20} color='black' />
            <Text className='text-base ml-2'>Home</Text>
          </TouchableOpacity>
          <Text className='my-4 text-2xl font-semibold'>Order Details</Text>
        </View>
        <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
          <View className=''>
            {cartItems.map(({ img, title, price, count }, i) => {
              const total = +price * count;
              return (
                <View
                  key={i}
                  className='flex-row justify-between items-center  mb-4'
                >
                  <View className='flex-row justify-between items-center gap-2'>
                    <Image
                      className='w-28 h-28 rounded-md object-cover'
                      source={{ uri: img }}
                    />
                    <View>
                      <Text className='font-semibold text-base capitalize'>
                        {title}
                      </Text>
                      <View className='flex-row  rounded-md items-center justify-between my-2 '>
                        <Text className='text-sm font-semibold'>Quantity:</Text>
                        <Text className='text-sm font-semibold'>{count}</Text>
                      </View>
                      <Text>Total : N {total}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View className=''>
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
          onPress={() => navigation.navigate("Store")}
        >
          <Text className='text-center text-white'>Download Reciept</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;
