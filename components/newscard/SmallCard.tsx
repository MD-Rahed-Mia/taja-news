import { NewsItemType } from "@/types/news";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const SmallNewCard = ({ news }: { news: NewsItemType }) => {
  return (
    <TouchableOpacity className="w-full">
      <Image
        source={{
          uri: news.thumbnail,
        }}
        className="w-full h-[100px] rounded-lg"
        resizeMethod="scale"
        resizeMode="cover"
      />
      <Text className="text-[12px] font-bold" lineBreakMode="middle" numberOfLines={2}>{news.title}</Text>
    </TouchableOpacity>
  );
};

export default SmallNewCard;

const styles = StyleSheet.create({});
