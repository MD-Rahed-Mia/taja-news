import { router } from "expo-router";
import { useLayoutEffect } from "react";
import { Button, View } from "react-native";

export default function Index() {
  useLayoutEffect(() => {
    setTimeout(() => {
      router.push("/(main)/(tabs)/dashboard");
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Go dashboard"
        onPress={() => router.push("/(main)/(tabs)/dashboard")}
      />
    </View>
  );
}
