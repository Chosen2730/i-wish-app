import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../../AuthContext";

const AddToCart = ({ navigation, route }) => {
  const { setCartItems, cartItems } = useGlobalContext();
  const { price, title, shades } = route?.params?.item;
  const [imageShownIndex, setImageShownIndex] = useState(0);
  const [availableIndex, setAvailableIndex] = useState(0);
  const nums = [43, 39, 42, 45];
  const [count, setCount] = useState(1);
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
  const addTocart = () => {
    navigation.navigate("ViewCart");
    const newCartItem = { price, title, count, img: shades[imageShownIndex] };
    setCartItems([...cartItems, newCartItem]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className='p-4'>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => navigation.goBack()}
          >
            <AntDesign name='left' size={20} color='black' />
            <Text className='text-base ml-2'>Back</Text>
          </TouchableOpacity>
        </View>
        <View className='p-4'>
          <Image
            className='w-full h-44 object-cover rounded-md'
            source={{ uri: shades[imageShownIndex] }}
          />
          <View className='flex-row justify-center items-center gap-4 my-2'>
            {shades?.map((obj, i) => (
              <TouchableOpacity key={i} onPress={() => setImageShownIndex(i)}>
                <Image
                  key={i}
                  source={{ uri: obj }}
                  className='w-10 h-10 object-cover rounded-md'
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text className='text-xl font-semibold'>{title}</Text>
          <Text className='text-xl font-bold my-2'>N {price}</Text>
          <Text className='text-lg font-semibold mt-4'>
            Product Description
          </Text>
          <Text className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusantium unde numquam voluptatem amet perspiciatis,
            aperiam quos sit sint vero.
          </Text>
          <Text className='text-lg font-semibold mt-4 mb-2'>
            Available Sizes
          </Text>
          <View className='flex-row gap-3'>
            {nums.map((obj, i) => (
              <Text
                className={`${
                  availableIndex === i
                    ? "bg-purple-600 text-white"
                    : "text-black bg-purple-50"
                } border-2 rounded-md text-center p-2 border-purple-600`}
                key={i}
                onPress={() => setAvailableIndex(i)}
              >
                {obj}{" "}
              </Text>
            ))}
          </View>
          <Text className='text-lg font-semibold mt-4 mb-2'>Quantity</Text>
          <View className='flex-row p-1 px-2 rounded-md border-2 border-purple-800 w-32 items-center justify-between'>
            <Text
              className='text-xl text-center w-8'
              onPress={() => decrease(count)}
            >
              -
            </Text>
            <Text className='text-lg text-purple-800 font-semibold'>
              {count}
            </Text>
            <Text className='text-xl text-center w-8' onPress={increase}>
              +
            </Text>
          </View>
          <View className='flex-row items-center justify-between mt-10'>
            <View className='border-2 border-purple-800 rounded-md p-4'>
              <AntDesign name='hearto' size={24} color='#7805A7' />
            </View>
            <TouchableOpacity
              className='bg-purple-800 p-5 rounded-md w-[75%]'
              onPress={addTocart}
            >
              <Text className='text-center text-white'>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddToCart;
