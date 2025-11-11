import Colors from "@/constants/color";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RowNewsCard from "../newscard/RowCard";

import news from "@/assets/news.json";

const NewsCategories = ({
  category = "Technology",
  slug,
}: {
  category: string;
  slug: string;
}) => {
  return (
    <View>
      <TouchableOpacity className="flex flex-row justify-start gap-4 items-center py-2 ">
        <Text className="text-2xl font-bold my-3">{category}</Text>
        <TouchableOpacity>
          <FontAwesome5 name="greater-than" size={18} color={Colors.primary} />
        </TouchableOpacity>
      </TouchableOpacity>

      <View>
        <RowNewsCard news={news[2]} />
        <RowNewsCard news={news[2]} />
        <RowNewsCard news={news[2]} />
        <RowNewsCard news={news[2]} />
      </View>
    </View>
  );
};

export default NewsCategories;

const styles = StyleSheet.create({});
