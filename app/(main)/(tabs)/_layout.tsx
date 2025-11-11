import Colors from "@/constants/color";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View className="w-full h-16 flex flex-row items-center justify-evenly gap-2 bg-white">
      <TouchableOpacity onPress={() => router.push("/(main)/(tabs)/dashboard")}>
        <AntDesign name="home" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(main)/(tabs)/search")}>
        <AntDesign name="file-search" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(main)/(tabs)/category-screen")}
      >
        <AntDesign name="menu" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="dashboard" />
        <Tabs.Screen name="search" />
        <Tabs.Screen name="category-screen" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
