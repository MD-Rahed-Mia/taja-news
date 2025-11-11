import { NewsItemType } from "@/types/news";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RowNewsCard = ({ news }: { news: NewsItemType }) => {
  return (
    <TouchableOpacity className="w-full py-4 shadow-slate-400  px-1 border-red-100 flex flex-row items-center gap-6">
      <Image
        source={{
          uri: news.thumbnail,
        }}
        className="w-16 h-16 rounded-lg"
        resizeMethod="scale"
        resizeMode="cover"
      />
      <View className="flex flex-col ">
        <Text className="text-lg max-w-[90%] font-bold" numberOfLines={2}>
          {news.title}
        </Text>
        <View className="flex flex-col">
          <Text className="text-[10px] text-gray-800 font-normal">
            ০৪:৫৫:৩০ অপরাহ্ন, বুধবার
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RowNewsCard;

const styles = StyleSheet.create({});
