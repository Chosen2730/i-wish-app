import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../AuthContext";

const SingleCartItem = ({ img, title, price }) => {
  const { cartItems, setCartItems } = useGlobalContext();
  const [count, setCount] = useState(1);
  const total = +price * count;

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount((n) => {
      const newCount = n - 1;
      if (newCount < 0) {
        return 0;
      }
      return newCount;
    });
  };

  const deleteItem = (title) => {
    const filteredCartItems = cartItems.filter(
      (item, i) => item.title !== title
    );
    setCartItems(filteredCartItems);
    console.log(cartItems);
  };
  return (
    <View className='flex-row justify-between items-center  mb-4'>
      <View className='flex-row justify-between items-center gap-2'>
        <Image
          className='w-28 h-28 rounded-md object-cover'
          source={{ uri: img }}
        />
        <View>
          <Text className='font-semibold text-base capitalize'>{title}</Text>
          <View className='flex-row p-1 px-2 rounded-md border-2 border-purple-800 w-32 items-center justify-between my-2'>
            <Text
              className='text-xl text-center w-8'
              onPress={() => decrease(count)}
            >
              -
            </Text>
            <Text className='text-lg text-purple-800 font-semibold'>
              {count}
            </Text>
            <Text
              className='text-xl text-center w-8'
              onPress={() => increase()}
            >
              +
            </Text>
          </View>
          <Text>Total : N {total}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => deleteItem(title)}
        className='p-2 bg-red-500 rounded-md'
      >
        <AntDesign name='delete' size={20} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default SingleCartItem;
