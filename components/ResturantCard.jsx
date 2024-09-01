import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { themeColors } from "@/theme/themeColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import { urlFor } from "@/SanityClient";

const ResturantCard = ({ item }) => {
  const navigatation = useNavigation();


  return (
    <TouchableWithoutFeedback
    onPress={()=> navigatation.navigate('Resturant',{...item}) }
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(1.7),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-xl mb-3 "
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri:urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <AntDesign name="star" size={20} color="gold" />
            <Text className="text-xs">
              <Text className="text-green-700">{item?.stars}</Text>
              <Text className="text-gray-700">
                ({item?.reviews} review) .
                <Text className="font-semibold">{item?.type?.name}</Text>
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Feather name="map-pin" size={15} color="gray" />
            <Text className="text-gray-700 text-xs truncate flex-1">
              Nearby. {item?.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResturantCard;
