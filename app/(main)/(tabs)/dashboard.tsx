import news from "@/assets/news.json";
import Header from "@/components/Header";
import NewsCategories from "@/components/news-cateogry";
import NewsCard from "@/components/newscard";
import RowNewsCard from "@/components/newscard/RowCard";
import SmallNewCard from "@/components/newscard/SmallCard";
import Colors from "@/constants/color";
import { NewsItemType } from "@/types/news";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Dashboard = () => {
  const breakingNews: NewsItemType = news[0];
  const breaking2: NewsItemType = news[1];
  return (
    <>
      <Header />
      <View className="p-4 pt-0">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-20"
        >
          {/* Breaking news */}
          <Text className="text-3xl font-semibold  py-2 underline">
            সম্প্রতি
          </Text>
          <View className="flex gap-4">
            <NewsCard news={breakingNews} />
            <NewsCard news={breakingNews} />
          </View>
          <TouchableOpacity
            className="w-3/5 mx-auto py-3 px-4 text-center mt-4 rounded-full"
            style={{ backgroundColor: Colors.primary }}
          >
            <Text className="text-center text-white">আরও পড়ুন</Text>
          </TouchableOpacity>
          {/* breaking news ends here */}

          {/* Section 2 */}
          <View className="h-8" />

          <View className="flex flex-row gap-4">
            <View className="flex flex-1 flex-col gap-4">
              <SmallNewCard news={breakingNews} />
              <SmallNewCard news={breakingNews} />
            </View>
            <View className="flex flex-1 flex-col gap-4">
              <SmallNewCard news={breakingNews} />
              <SmallNewCard news={breakingNews} />
            </View>
          </View>
          {/* End of section 2 */}

          {/* Section 2 start */}
          <View>
            <RowNewsCard news={breaking2} />
            <RowNewsCard news={breaking2} />
            <RowNewsCard news={breaking2} />
            <RowNewsCard news={breaking2} />
            <RowNewsCard news={breaking2} />
          </View>

          {/* category wise news */}
          <NewsCategories category={breaking2.category} slug="technology" />
          <NewsCategories category={breakingNews.category} slug="technology" />
          <NewsCategories category={news[3].category} slug="technology" />
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
