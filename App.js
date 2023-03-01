import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "./src/screens/home/HomeScreen";

// react stack navigation initialize
const Stack = createNativeStackNavigator();

export default function Main() {
  useEffect(() => {
    console.log("Init");
  }, []);

  return (
    <>
      <StatusBar backgroundColor="black" style="light" />
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
