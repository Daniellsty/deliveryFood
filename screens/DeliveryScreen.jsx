import { themeColors } from "@/theme/themeColor";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "@/redux/resturantSlice";
import { emptyCart } from "@/redux/cartSlice";
import {Platform} from 'react-native';

const DeliveryScreen = () => {

  const deliveryImg = Platform.OS === 'ios' ? require("../assets/images/Delivery.gif") : require("../assets/images/bikeGuy.png")

  const navigation = useNavigation();
  const restaurant = useSelector(selectResturant);
  const dispatch = useDispatch();

  const cancelOrder=()=>{
    navigation.navigate('Home');
    dispatch(emptyCart());
  }

 

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat,
            longitude: restaurant?.lng,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-semibold text-gray-700">20-30</Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on the Way
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy.png")}
          />
        </View>
        <View
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              source={deliveryImg}
              className="h-16 w-16 rounded-full"
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white"> user</Text>
            <Text className="text-lg font-semibold text-white capitalize">
              your rider
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Entypo name="phone" size={24} color={themeColors.bgColor(1)}  />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={cancelOrder  }
            className="bg-white p-2 rounded-full">
            <Entypo name="circle-with-cross" size={24} color="red" />           
             </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
