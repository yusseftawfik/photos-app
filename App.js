import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/Redux/Store";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import DataScreen from "./app/screens/DataScreen";
import DetailsScreen from "./app/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
                title: "",
                headerRight: () => (
                  <Button
                    onPress={() => alert("by: Yussef Mohamed Tawfik")}
                    title="ℹ"
                    color="#fff"
                  />
                ),
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="Data"
              options={{
                title: "",
              }}
              component={DataScreen}
            />
            <Stack.Screen
              name="Details"
              options={{
                title: "",
              }}
              component={DetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
