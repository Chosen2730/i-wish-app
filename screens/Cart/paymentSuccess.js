import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../../AuthContext";

const PaymentSuccess = ({ navigation }) => {
  const { total } = useGlobalContext();
  return (
    <SafeAreaView className='flex-1 px-4'>
      <TouchableOpacity
        className='flex-row items-center py-2'
        onPress={() => navigation.goBack()}
      >
        <AntDesign name='left' size={20} color='black' />
        <Text className='text-base ml-2'>Back</Text>
      </TouchableOpacity>
      <View className='flex-1 items-center justify-center'>
        <Image
          className='w-20 h-20'
          source={require("./../../assets/images/success.png")}
        />
        <Text className='text-xl font-semibold'>Order Successful</Text>
        <Text className='text-sm text-center'>
          Thank you for shopping on i-Wish. Your order has been confirmed and
          packaged.
        </Text>
        <View className='my-10 border-b-2 border-b-gray-300 w-full' />
        <View className='flex-row justify-between items-center w-full'>
          <Text className='font-semibold text-base'>Amount Payed</Text>
          <Text className='text-base'>N {total}</Text>
        </View>
        <View className='flex-row justify-between items-center w-full'>
          <Text className='font-semibold text-base'>Ref No</Text>
          <Text className='text-base'>365893643033RN</Text>
        </View>
        <View className='flex-row items-center bg-gray-200 p-4 rounded-xl my-4 w-full'>
          <Image
            source={require("./../../assets/images/master.png")}
            className='w-[61px] h-[48px] mr-4'
          />
          <View>
            <Text className='font-semibold text-base'>Anthony Jonathan</Text>
            <Text>xxxx xxxx xxxx 1234</Text>
          </View>
        </View>
        <TouchableOpacity
          className='bg-purple-800 p-5 px-10 rounded-md my-8'
          onPress={() => navigation.navigate("OrderDetails")}
        >
          <Text className='text-center text-white'>View Details</Text>
        </TouchableOpacity>
        <Image
          className='w-[100%] h-[150px]'
          source={require("./../../assets/images/mask.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccess;
