import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SharedHeader = ({ func, openCart }) => {
  const icons = ["", ""];
  const [isPressedIndex, setIsPressedIndex] = useState(null);
  return (
    <View className='bg-white'>
      <View className='p-4 shadow-md border-b-2 border-b-gray-200 flex-row justify-between pt-8'>
        <TouchableOpacity onPress={func}>
          <Image className='' source={require("./../assets/images/menu.png")} />
        </TouchableOpacity>
        <View className='flex-row gap-4'>
          <View className='flex-row'>
            {icons.map((item, i) => {
              return (
                <View
                  key={i}
                  className={`${
                    isPressedIndex === i ? "bg-purple-800" : "bg-white"
                  } mr-3 rounded-md p-1`}
                >
                  {i === 0 ? (
                    <TouchableOpacity onPressIn={() => setIsPressedIndex(0)}>
                      <Ionicons
                        name='notifications-outline'
                        size={24}
                        color={`${isPressedIndex === i ? "#fff" : "#7805A7"}`}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity>
                      <Ionicons
                        name='ios-cart-outline'
                        size={24}
                        color={`${isPressedIndex === i ? "#fff" : "#7805A7"}`}
                        onPress={openCart}
                        onPressIn={() => setIsPressedIndex(1)}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>

          <Image
            className='w-8 h-8 rounded-full'
            source={require("./../assets/images/profile.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default SharedHeader;
