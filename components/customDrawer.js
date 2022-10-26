import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../AuthContext";
const CustomDrawer = (props) => {
  const { logout } = useGlobalContext();
  return (
    <View className='flex-1'>
      <DrawerContentScrollView {...props}>
        <View className='p-4 border-b-2 border-b-gray-200 py-8'>
          <Image
            source={require("./../assets/images/logo.png")}
            className='w-[100px] h-[34px]'
          />
        </View>

        <View className='p-4'>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View className='border-t-2 border-t-gray-200'>
        <TouchableOpacity
          className='flex-row p-6 gap-4'
          onPress={() => logout()}
        >
          <AntDesign name='logout' size={22} color='#FF2B2B' />
          <Text className='text-red-500'>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
