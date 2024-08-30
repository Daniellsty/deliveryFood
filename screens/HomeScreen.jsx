import { themeColors } from "../theme/themeColor";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { category } from "@/constants";

import { View, Text, StatusBar, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white ">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3  rounded-full border border-gray-300">
          <AntDesign name="search1" size={25} color="gray" />
          <TextInput placeholder="Resturansts" className="ml-2 flex-1 " />
          <View className="flex-row items-center space-x-1 border-l  pl-2">
            <Feather name="map-pin" size={25} color="black" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full  "
        >
          <Feather name="sliders" size={24} color="white" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />
        <View className="mt-5">
          {category.map((item, index) => {
            return(
              <FeaturedRow key={index} title={item.name} />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
