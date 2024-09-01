import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "@/theme/themeColor";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { selectCartItems, selectedTotalCartPrice } from "@/redux/cartSlice";

const CardIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectedTotalCartPrice)


  if(!cartItems.length) return;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={()=> navigation.navigate('Cart') }
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg shadow-black"
      >
        <View
        style={{backgroundColor:'rgba(255,255,255,0.3)'}}
        className="p-2 px-4 rounded-full">
          <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
        view Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">
            ${cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardIcon;
