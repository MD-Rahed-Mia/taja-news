import categories from "@/assets/cetegory.json";
import CategoryRow from "@/components/category/CategoryRow";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

const CategoryScreen = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <CategoryRow category={item} />}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
