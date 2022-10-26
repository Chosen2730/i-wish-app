import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedHeader from "../../components/sharedHeader";
import { AntDesign } from "@expo/vector-icons";
import PopularCat from "../../components/popularCat";
import { TextInput } from "react-native-gesture-handler";
import WishlistItems from "../../components/wishlistItems";
import MyWishList from "../../components/myWishList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1'>
      <SharedHeader
        func={() => navigation.openDrawer()}
        openCart={() => navigation.navigate("My Orders")}
      />
      <View className='p-4 bg-white'>
        <View className=''>
          <Text className='text-3xl font-bold'>Wishlist Store</Text>
          <View className='flex-row border-2 p-1 my-3 rounded-md border-gray-200'>
            <TextInput placeholder='Search for keywords' className='-mr-12' />
            <View className='bg-purple-800 p-2 rounded-md ml-auto'>
              <AntDesign name='search1' size={24} color='white' />
            </View>
          </View>
        </View>
      </View>

      <ScrollView className='px-4 bg-gray-50 rounded-xl flex-1'>
        <PopularCat navigation={navigation} />
        <WishlistItems navigation={navigation} />
        <MyWishList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
