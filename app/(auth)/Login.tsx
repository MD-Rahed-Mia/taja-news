import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{ height: "100%" }}>
          <Image
            source={require("@/assets/login.png")}
            style={{ width: "100%", height: "30%" }}
            resizeMethod="scale"
            resizeMode="contain"
          />

          <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 16, textDecorationLine: "underline" }}>
            Sign in
          </Text>

          <View style={{ padding: 16 }}>
            <View>
              <Text>Email</Text>
              <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "orange", marginTop: 8 }}>
                <Ionicons name="mail-open-outline" size={18} />
                <TextInput placeholder="email" style={{ width: "100%", paddingLeft: 8 }} />
              </View>

              <View style={{ marginVertical: 20 }} />

              <Text>Password</Text>
              <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "orange", marginTop: 8 }}>
                <Ionicons name="lock-closed-outline" size={18} />
                <TextInput placeholder="password" secureTextEntry style={{ width: "100%", paddingLeft: 8 }} />
              </View>
            </View>
          </View>

          <Link
            href={"/(auth)/forget-password"}
            style={{ textAlign: "right", paddingRight: 16, color: "orange", fontWeight: "bold" }}
          >
            Forget password
          </Link>

          <Pressable style={{ width: "60%", alignSelf: "center", backgroundColor: "orange", paddingVertical: 16, borderRadius: 25, marginTop: 16, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </Pressable>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 24 }}>
            <Text>Don't have an account? </Text>
            <Link
              href={"/(auth)/Register"}
              style={{ fontWeight: "bold", color: "orange" }}
            >
              Register
            </Link>
          </View>

          <TouchableOpacity style={{ width: "60%", alignSelf: "center", paddingVertical: 12, backgroundColor: "blue", marginTop: 16, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white" }}>
              <Ionicons name="logo-google" size={18} color="white" /> Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
