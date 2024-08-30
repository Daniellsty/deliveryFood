import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

import { themeColors } from "../theme/themeColor";

const CartScreen = () => {
  const resutaurant = {};
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm shadow-black">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 rounded-full p-1 shadow shadow-black top-5 left-2"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <AntDesign name="arrowleft" size={24} color={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{resutaurant?.name}</Text>
        </View>
      </View>

      <View
        className="flex-row py-2 px-4 items-center"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <Image
          className="w-20 h-20 rounded-full"
          source={require("../assets/images/dishes/bikeGuy.png")}
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
        className="bg-white pt-5"
      >
        {resutaurant?.dishes?.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md shadow-black"
            >
              <Text style={{ color: themeColors.text }} className="font-bold">
                2 x
              </Text>
              <Image source={dish?.image} className="h-14 w-14 rounded-full" />
              <Text className="flex-1 font-bold text-gray-700">
                {dish?.name}
              </Text>
              <Text className="font-semibold text-base">{dish?.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <AntDesign name="minus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        className="flex-col justify-center gap-3 p-6 px-8 rounded-t-3xl space-x-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row  justify-between   pl-1">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700">ِDelivery Fee</Text>
          <Text className="text-gray-700">$2</Text>
        </View>

        <View className="flex-row justify-between ">
          <Text className="text-gray-700">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$30</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('OrderPrepairingScreen') }
            className="p-3 rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-white text-center font-bold text-lg">Pleace Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
