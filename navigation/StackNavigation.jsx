import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ResturantScreen from "../screens/ResturantScreen";
import CartScreen from "../screens/CartScreen";
import OrderPrepairingScreen from "../screens/OrderPrepairingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
        <Stack.Screen name="OrderPrepairingScreen" options={{presentation:"fullScreenModal"}} component={OrderPrepairingScreen} />
        <Stack.Screen name="DeliveryScreen" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
