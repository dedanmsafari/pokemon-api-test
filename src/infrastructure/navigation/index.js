import { View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../../features/Home/screens/home.screens";
import DetailsScreen from "../../features/Home/screens/details.screens";
const Stack = createStackNavigator();

const Navigation = ({ onReady, navigationRef }) => {
  return (
    <NavigationContainer onReady={onReady} ref={navigationRef}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
export default Navigation;
