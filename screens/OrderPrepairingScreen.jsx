
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { View,  Image } from 'react-native'

const OrderPrepairingScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{

    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
      
      
    }, 3000);

  },[])

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
      className="w-80 h-80"
      source={require('../assets/images/Delivery.gif')} />
    </View>
  )
}

export default OrderPrepairingScreen