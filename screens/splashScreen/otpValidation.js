import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../../AuthContext";

const OTPValidation = ({ navigation }) => {
  const { login } = useGlobalContext();
  const OTPArray = new Array(5).fill("");
  const [otp, setOtp] = useState(OTPArray);
  const handleChange = (element, index) => {
    if (isNaN(element)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <SafeAreaView className='flex-1 p-4'>
      <TouchableOpacity
        className='flex-row mr-auto items-center'
        onPress={() => navigation.goBack()}
      >
        <AntDesign name='left' size={20} color='black' />
        <Text className='text-base mr-2'>Back</Text>
      </TouchableOpacity>
      <Text className='text-center font-bold text-xl my-3'>
        Verification Code
      </Text>
      <View className='justify-center items-center'>
        <Image
          source={require("./../../assets/images/otp.png")}
          className='w-[230px] h-[250px]'
        />
        <Text className='text-base text-center'>
          Please, enter the 5 digit code sent to your email for verification.
          Open Email App
        </Text>
        <View className='flex-row gap-2 my-4'>
          {OTPArray.map((cont, i) => {
            return (
              <TextInput
                className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
                keyboardType='number-pad'
                key={i}
                onFocus={(value) => value.select()}
                onChangeText={(value) => handleChange(value, i)}
              />
            );
          })}
        </View>
        <TouchableOpacity
          className='bg-purple-800 w-full rounded-md p-4 my-5'
          onPress={() => login()}
        >
          <Text className='text-white text-center text-sm'>Verify Code</Text>
        </TouchableOpacity>
        <Text className='text-sm text-center my-2'>
          Didn't recieve any code?{" "}
          <Text className='text-purple-800 underline'>Resend Code</Text>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OTPValidation;
