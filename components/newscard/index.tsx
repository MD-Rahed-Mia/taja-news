import { NewsItemType } from "@/types/news";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NewsCard = ({ news }: { news: NewsItemType }) => {
  return (
    <TouchableOpacity className="w-full">
      <Image
        source={{
          uri: news.thumbnail,
        }}
        className="w-full h-[200px] rounded-lg"
        resizeMethod="scale"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold">{news.title}</Text>
      <View className="flex gap-2 mt-2 flex-row items-center ">
        {news.tags.map((tag) => (
          <Text
            className="text-[12px] bg-blue-500 px-2 py-1 rounded-sm text-white"
            key={tag}
          >
            {tag}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
