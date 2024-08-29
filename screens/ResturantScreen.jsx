import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

import CardIcon from '../components/CardIcon';
import DishRow from '../components/DishRow';
import { themeColors } from "@/theme/themeColor";
import { category } from "@/constants";


const ResturantScreen = () => {
  const { params } = useRoute();
  const item = params;
  const navigation = useNavigation();

  return (
    <View>
      <CardIcon/>
      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14  left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          className="bg-white -mt-12 pt-6"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <AntDesign name="star" size={20} color="gold" />
                <Text className="text-xs">
                  <Text className="text-green-700">{item?.stars}</Text>
                  <Text className="text-gray-700">
                    ({item?.reviews} review) .
                    <Text className="font-semibold">{item?.category}</Text>
                  </Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Feather name="map-pin" size={15} color="gray" />
                <Text className="text-gray-700 text-xs">
                  Nearby. {item?.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">
            {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
        <Text className="px-4 py-4 text-2xl font-bold">
        Menu
        </Text>
        {
          category.map((items,index)=>{
            return(
              <DishRow
              item={items}
              key={index}
              />
            )
          })
        }
        </View>
      </ScrollView>
    </View>
  );
};

export default ResturantScreen;
