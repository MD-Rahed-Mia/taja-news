import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Register = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Image
        source={require("@/assets/register.png")}
        className="w-full h-[30%]"
        resizeMethod="scale"
        resizeMode="center"
      />
      <View className="p-4">
        <Text className="text-3xl font-bold underline">Register</Text>

        <View style={{ padding: 16 }}>
          <View>
            <Text className="text-gray-400 underline">Email</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "orange",
                marginTop: 8,
              }}
            >
              <Ionicons name="mail-open-outline" size={18} />
              <TextInput
                placeholder="email"
                style={{ width: "100%", paddingLeft: 8 }}
              />
            </View>

            <View style={{ marginVertical: 5 }} />

            <Text className="text-gray-400 underline">Password</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "orange",
                marginTop: 8,
              }}
            >
              <Ionicons name="lock-closed-outline" size={18} />
              <TextInput
                placeholder="password"
                secureTextEntry
                style={{ width: "100%", paddingLeft: 8 }}
              />
            </View>
            <View style={{ marginVertical: 5 }} />
            <Text  className="text-gray-400 underline">Confirm password</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "orange",
                marginTop: 8,
              }}
            >
              <Ionicons name="lock-closed-outline" size={18} />
              <TextInput
                placeholder="confirm password"
                secureTextEntry
                style={{ width: "100%", paddingLeft: 8 }}
              />
            </View>
          </View>

          <Pressable
            style={{
              width: "60%",
              alignSelf: "center",
              backgroundColor: "orange",
              paddingVertical: 16,
              borderRadius: 25,
              marginTop: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
          </Pressable>

          <Link
            href={"/(auth)/Login"}
            style={{
              textAlign: "center",
              paddingRight: 16,
              color: "orange",
              fontWeight: "bold",
              marginTop: 16,
            }}
          >
            Login
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
