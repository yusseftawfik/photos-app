// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../screens/HomeScreen";
// import DataScreen from "../screens/DataScreen";
// import DetailsScreen from "../screens/DetailsScreen";

// const Router = () => {
// 	const Stack = createNativeStackNavigator();
// 	return (
// 		<NavigationContainer>
// 			<StatusBar hidden />
// 			<Stack.Navigator
// 				screenOptions={{
// 					headerStyle: {
// 						backgroundColor: "#000",
// 					},
// 					headerTintColor: "#fff",
// 					headerTitleStyle: {
// 						fontWeight: "bold",
// 					},
// 				}}
// 			>
// 				<Stack.Screen
// 					name="Home"
// 					options={{
// 						title: "",
// 						headerRight: () => (
// 							<Button
// 								onPress={() => alert("by: Yussef Mohamed Tawfik")}
// 								title="ℹ"
// 								color="#fff"
// 							/>
// 						),
// 					}}
// 					component={HomeScreen}
// 				/>
// 				<Stack.Screen
// 					name="Data"
// 					options={{
// 						title: "Choose a city",
// 					}}
// 					component={DataScreen}
// 				/>
// 				<Stack.Screen
// 					name="Details"
// 					options={{
// 						title: "",
// 					}}
// 					component={DetailsScreen}
// 				/>
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// };

// export default Router;
