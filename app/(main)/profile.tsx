import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  function handleLogout() {
    router.replace("/(auth)/Login");
  }
  return (
    <View className="flex items-stretch justify-between h-[90vh]">
      <View>
        <View className="w-[124px] mx-auto">
          <Image
            source={require("@/assets/profile.png")}
            className="w-32 h-32 mx-auto my-12"
          />
          <TouchableOpacity className="w-8 h-8 absolute bottom-16 right-4 bg-white flex items-center justify-center rounded-full">
            <Ionicons name="pencil" size={18} color={"black"} className="  " />
          </TouchableOpacity>
        </View>
        <View className="flex items-center justify-center">
          <Text className="text-lg font-bold">Anisul Islam</Text>
          <Text className="text-sm ">mdrahed708@gmail.com</Text>
          <Text className="text-sm ">Date of birth : 20 November 2025</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        className="flex items-center justify-center w-[150px] mx-auto rounded-lg px-12 py-3 flex-row gap-2 mt-20 bg-orange-600"
      >
        <Ionicons name="exit-outline" size={18} color={"white"} />
        <Text className="text-center text-white">Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
