import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedHeader from "../../components/sharedHeader";
import { AntDesign } from "@expo/vector-icons";
import { store } from "../../utils/store";
import { FlatList } from "react-native-gesture-handler";

const Store = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='p-4'>
        <TouchableOpacity
          className='flex-row items-center'
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='left' size={20} color='black' />
          <Text className='text-base ml-2'>Home</Text>
        </TouchableOpacity>
        <Text className='text-2xl font-bold mt-6 capitalize'>
          Wishlist Store
        </Text>
        <View className='flex-row border-2 p-1 my-4 rounded-md border-gray-200'>
          <TextInput placeholder='Search for keywords' className='-mr-12' />
          <View className='bg-purple-800 p-2 rounded-md ml-auto'>
            <AntDesign name='search1' size={24} color='white' />
          </View>
        </View>
      </View>
      <FlatList
        data={store}
        className='p-4'
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => {
          return (
            <View className='border-[1px] w-[48%] rounded-md border-gray-200 mb-8'>
              <Image
                className='w-full h-32 rounded-md object-cover'
                source={{ uri: item.shades[0] }}
              />
              <View className='p-2 bg-gray-100'>
                <Text className='capitalize text-gray-600 my-1 font-semibold'>
                  {item.title}
                </Text>
                <Text className='capitalize text-gray-600 my-1 font-bold'>
                  <Text className='decoration-double'>N</Text> {item.price}
                </Text>
                <TouchableOpacity
                  className='bg-purple-800 p-4 rounded-md'
                  onPress={() => navigation.navigate("AddToCart", { item })}
                >
                  <Text className='text-center text-white text-xs'>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Store;
