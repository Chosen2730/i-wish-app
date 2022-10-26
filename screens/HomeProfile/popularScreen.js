import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { category } from "../../utils/category";
import SharedHeader from "../../components/sharedHeader";

const PopuplarScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1'>
      <SharedHeader
        func={() => navigation.openDrawer()}
        openCart={() => navigation.navigate("My Orders")}
      />
      <View className='p-4'>
        <TouchableOpacity
          className='flex-row items-center'
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='left' size={20} color='black' />
          <Text className='text-base mr-2'>Back</Text>
        </TouchableOpacity>
        <Text className='text-2xl font-bold my-6'>Popular Categories</Text>
      </View>
      <FlatList
        data={category}
        className='p-4'
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              className='items-center justify-center w-[48%] mb-5'
              onPress={() =>
                navigation.navigate("Single Category", { category: item.cat })
              }
            >
              <Image
                className='w-full h-32 rounded-md object-cover'
                source={{ uri: item.img }}
              />
              <Text className='capitalize text-gray-600 my-2'>{item.cat}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PopuplarScreen;
