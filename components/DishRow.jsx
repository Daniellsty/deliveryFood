import { themeColors } from "@/theme/themeColor";
import { View, Text, Image, TouchableOpacity } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { urlFor } from "@/SanityClient";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById } from "@/redux/cartSlice";

const DishRow = ({ item }) => {

  const dispatch = useDispatch();
  // const totalItems = useSelector(state => selectCartItemsById(state,item._id))
  const total = useSelector(state => state.cart.items);
  const totalItems =total.filter(totals =>  totals._id == item._id );
 
 
  
  const handleIncrease=()=>{
    dispatch(addToCart({...item}))
  }

  const handleDecrease=()=>{
    dispatch(removeFromCart({id:item._id}))
  }

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-xl shadow-black mb-3 mx-2">
       
      <Image
        style={{ width: 100, height: 100 }}
        className="rounded-3xl"
        source={{uri:urlFor(item.image).url()}}
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
              onPress={()=> handleDecrease() }
              disabled={!totalItems.length}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text className="px-3 ">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={()=> handleIncrease()}
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
