import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { wishlist } from "../utils/wislist";
import { AntDesign } from "@expo/vector-icons";

const MyWishList = ({ navigation }) => {
  return (
    <View className='flex-1 my-5'>
      <View className='flex-row justify-between mt-4'>
        <Text className='font-semibold text-base'>My Wishlist</Text>
        <TouchableOpacity
          className='flex-row gap-2'
          onPress={() => navigation.navigate("My Wishlist")}
        >
          <Text className='text-sm text-purple-800'>View all</Text>
          <AntDesign name='right' size={20} color='#7805A7' />
        </TouchableOpacity>
      </View>
      <View className='flex-row flex-wrap justify-start items-start'>
        {wishlist.map(({ cat, img, count }, i) => {
          return (
            <TouchableOpacity
              className='items-center justify-start flex-1 flex-row min-w-[50%] max-w-[41%] h-[100px]'
              key={i}
            >
              <Image
                className='w-16 h-16 rounded-md object-cover'
                source={{ uri: img }}
              />
              <View className='ml-2'>
                <Text className='capitalize text-gray-600 text-base font-semibold'>
                  {cat}
                </Text>
                <Text className='capitalize text-gray-600 text-sm'>
                  {count} items
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyWishList;
