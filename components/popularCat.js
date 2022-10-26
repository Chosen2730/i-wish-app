import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { category } from "../utils/category";
import { AntDesign } from "@expo/vector-icons";

const PopularCat = ({ navigation }) => {
  return (
    <View className='my-3'>
      <View className='flex-row justify-between my-4'>
        <Text className='font-semibold text-base'>Popular Categories</Text>
        <TouchableOpacity
          className='flex-row gap-2'
          onPress={() => navigation.navigate("Popular Categories")}
        >
          <Text className='text-sm text-purple-800'>View all</Text>
          <AntDesign name='right' size={20} color='#7805A7' />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.map(({ cat, img }, i) => {
          return (
            <TouchableOpacity
              className='items-center justify-center mr-4'
              key={i}
              onPress={() =>
                navigation.navigate("Single Category", { category: cat })
              }
            >
              <Image
                className='w-52 h-32 rounded-md object-cover'
                source={{ uri: img }}
              />
              <Text className='capitalize text-gray-600 my-1'>{cat}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PopularCat;
