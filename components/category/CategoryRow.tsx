import Colors from "@/constants/color";
import { CategoryType } from "@/types/category";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryRow = ({ category }: { category: CategoryType }) => {
  const [showSubCategory, setShowSubCategory] = useState(false);

  const color = Colors.primary;

  function handleShowSubCategory() {
    setShowSubCategory(!showSubCategory);
  }
  return (
    <View className="">
      <TouchableOpacity
        onPress={handleShowSubCategory}
        className="py-4 px-2 pl-8 border-b-gray-200 border-b-2 flex flex-row justify-between items-center pr-8 "
      >
        <Text
          className={`${showSubCategory ? `text-[#e96c6d]` : "text-black"}`}
        >
          {category.name}
        </Text>
        <View
          className="px-4 py-2 rounded-md border-l-2 border-l-gray-200"
          style={{
            transform: [
              {
                rotate: showSubCategory ? "90deg" : "0deg",
              },
            ],
          }}
        >
          <AntDesign
            name="caret-right"
            size={18}
            color={showSubCategory ? Colors.primary : "gray"}
          />
        </View>
      </TouchableOpacity>
      {showSubCategory &&
        category.subCategories.map((subCategory, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="pl-12 py-4 border-b-red-100 border-b-2"
            >
              <Text>{subCategory}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default CategoryRow;

const styles = StyleSheet.create({});
