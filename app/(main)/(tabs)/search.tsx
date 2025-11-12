import news from "@/assets/news.json";
import NewsCard from "@/components/newscard";
import SearchInput from "@/components/search/SearchInput";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Search = () => {
  return (
    <View>
      <SearchInput />

      <ScrollView
        style={{
          paddingBottom: 50,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View className="p-4 flex items-center justify-evenly flex-wrap w-full gap-2 flex-row">
          <TouchableOpacity className="px-4 py-2 rounded-full bg-blue-500 text-white max-w-32 text-center">
            <Text className="text-white text-center">সম্প্রতি</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 rounded-full bg-blue-500 text-white text-center">
            <Text className="text-white text-center">ক্রিকেট</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 rounded-full bg-blue-500 text-white  text-center">
            <Text className="text-white text-center"> অর্থ ও বাণিজ্য</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 rounded-full bg-blue-500 text-white  text-center">
            <Text className="text-white text-center">রেলপথ</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 rounded-full bg-blue-500 text-white  text-center">
            <Text className="text-white text-center">যোগাযোগ</Text>
          </TouchableOpacity>
        </View>

        {/* most search news today */}
        <Text className="pl-4 py-2 text-2xl  font-semibold underline">
          সর্বাধিক পঠিত
        </Text>
        <View className="p-4 flex gap-4">
          <NewsCard news={news[2]} />
          <NewsCard news={news[2]} />
          <NewsCard news={news[2]} />
          <NewsCard news={news[2]} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
