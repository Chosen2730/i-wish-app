import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const FormInput = ({ label, password, type, inputHandler }) => {
  const [isPassWordVisible, setIsPasswordVisible] = useState(true);
  const [focussed, setFocussed] = useState(false);

  return (
    <View className='relative'>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={password && isPassWordVisible}
        onFocus={() => {
          setFocussed(true);
        }}
        onBlur={() => {
          setFocussed(false);
        }}
        keyboardType={type}
        onChangeText={inputHandler}
        className={`border ${
          focussed ? " border-gray-500" : "border-gray-200"
        } bg-gray-200 p-3 rounded-md my-2`}
      />
      {password && (
        <TouchableOpacity
          className='absolute top-10 right-5'
          onPress={() => setIsPasswordVisible(!isPassWordVisible)}
        >
          {isPassWordVisible ? (
            <Ionicons name='eye' size={25} color='#B2B2B2' />
          ) : (
            <Ionicons name='eye-off' size={25} color='#B2B2B2' />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormInput;
