import { themeColors } from "@/theme/themeColor";
import { View, Text, Image, TouchableOpacity } from "react-native";


import AntDesign from "@expo/vector-icons/AntDesign";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-xl shadow-black mb-3 mx-2">
       
      <Image
        style={{ width: 100, height: 100 }}
        className="rounded-3xl"
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">

        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item?.description}</Text>
        </View>
        <View className="flex-row justify-between items-center pl-3">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text className="px-3 ">2</Text>
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
