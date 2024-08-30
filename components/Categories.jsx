import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { category } from "../constants/index";
import { useState } from "react";

const Categories = () => {

  const [activeCategory,setActiveCategory] = useState(null);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {category.map((item, index) => {
          const isActive = item.id == activeCategory;
          const btnClass = isActive? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity 
              onPress={()=> setActiveCategory(item.id)}
              className={"bg-gray-200 p-2 rounded-full shadow " +btnClass}>
                <Image source={item.image} style={{width:45,height:45}}/>
              </TouchableOpacity>
                <Text className={"text-sm" +textClass}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
