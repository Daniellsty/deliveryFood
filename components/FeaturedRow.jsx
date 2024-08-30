import ResturantCard from './ResturantCard';
import { category } from "@/constants";
import { themeColors } from "@/theme/themeColor";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const FeaturedRow = ({ title }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 flex-1">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{title}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15 }}
        className="overflow-visible py-5">
            {
                category.map((item,index)=>{
                    return(
                        <ResturantCard  
                        key={index}  
                        item={item}/>
                    )
                })
            }

        </ScrollView>
    </View>
  );
};

export default FeaturedRow;
