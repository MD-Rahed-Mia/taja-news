import Feather from '@expo/vector-icons/Feather';
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const SearchInput = () => {
  return (
    <View className="flex flex-row items-center justify-between border-b-2 border-b-gray-300 gap-2 px-4 py-2">
      <TouchableOpacity>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      <TextInput
        placeholder="বাংলাদেশ"
        className="px-2 py-3 w-full mx-auto"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
