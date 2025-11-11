import Colors from "@/constants/color";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View className="w-full py-2 px-4 flex flex-row items-center justify-between">
      <Text className="text-2xl font-bold" style={{ color: Colors.primary }}>
        Taja News
      </Text>
      <TouchableOpacity>
        <FontAwesome5 name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
