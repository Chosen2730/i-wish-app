import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { store } from "../utils/store";
import { AntDesign } from "@expo/vector-icons";

const WishlistItems = ({ navigation }) => {
  return (
    <View className='my-3'>
      <View className='flex-row justify-between my-4'>
        <Text className='font-semibold text-base'>Wishlist Items</Text>
        <TouchableOpacity
          className='flex-row gap-2'
          onPress={() => navigation.navigate("Wishlist Items")}
        >
          <Text className='text-sm text-purple-800'>View all</Text>
          <AntDesign name='right' size={20} color='#7805A7' />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {store.map(({ title, price, img }, i) => {
          return (
            <View
              className='border-[1px] rounded-md border-gray-200 mr-4'
              key={i}
            >
              <Image
                className='w-52 h-32 rounded-md object-cover'
                source={{ uri: img }}
              />
              <View className='p-2 bg-gray-100'>
                <Text className='capitalize text-gray-600 my-1 font-semibold'>
                  {title}
                </Text>
                <Text className='capitalize text-gray-600 my-1 font-bold'>
                  <Text className='decoration-double'>N</Text> {price}
                </Text>
                <TouchableOpacity className='bg-purple-800 p-4 rounded-md'>
                  <Text className='text-center text-white text-xs'>
                    Add to Wishlist
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WishlistItems;
