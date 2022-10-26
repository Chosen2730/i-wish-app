import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedHeader from "../../components/sharedHeader";
import { AntDesign } from "@expo/vector-icons";

const CartItems = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className='p-4'>
        <TouchableOpacity
          className='flex-row items-center'
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='left' size={20} color='black' />
          <Text className='text-base mr-2 '>Back</Text>
        </TouchableOpacity>

        <Image
          className='w-full h-96'
          source={require("./../../assets/images/basket.png")}
        />
        <Text className='text-center text-2xl font-bold my-5'>
          Your Cart is empty
        </Text>
        <Text className='text-center text-base '>
          Browse our categories and discover awesome products just for you
        </Text>
        <TouchableOpacity
          className='bg-purple-800 p-4 rounded-md mt-10'
          onPress={() => navigation.navigate("Store")}
        >
          <Text className='text-center text-white'>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartItems;
