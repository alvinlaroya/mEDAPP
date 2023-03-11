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
import FirstActivity from "./src/screens/quarter/first/FirstActivity";
import SecondActivity from "./src/screens/quarter/first/SecondActivity";
import ThirdActivity from "./src/screens/quarter/second/ThirdActivity";
import FourthActivity from "./src/screens/quarter/third/FourthActivity";
import FifthActivity from "./src/screens/quarter/third/FifthActivity";
import SixthActivity from "./src/screens/quarter/third/SixthActivity";
import SeventhActivity from "./src/screens/quarter/third/SeventhActivity";
import EighthActivity from "./src/screens/quarter/fourth/EighthActivity";
import NinthActivity from "./src/screens/quarter/fourth/NinthActivity";
import TenthActivity from "./src/screens/quarter/fourth/TenthActivity";
import EleventhActivity from "./src/screens/quarter/fourth/EleventhActivity";
import TwelveActivity from "./src/screens/quarter/fourth/TwelveActivity";
import ThirteenthActivity from "./src/screens/quarter/fourth/ThirteenthActivity";
import FourteenthActivity from "./src/screens/quarter/fourth/FourteenthActivity";
import FifteenthActivity from "./src/screens/quarter/fourth/FifteenthActivity";


// activity screens
import Activity1 from "./src/screens/quarter/first/activity/Activity1.jsx";
import Activity2 from "./src/screens/quarter/first/activity/Activity2.jsx";
import Activity8 from "./src/screens/quarter/fourth/activity/Activity8.jsx";

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
            <Stack.Screen
              name="FirstActivity"
              component={FirstActivity}
              options={{ headerShown: true, headerTitle: "Sort and classify objects" }}
            />
            <Stack.Screen
              name="SecondActivity"
              component={SecondActivity}
              options={{ headerShown: true, headerTitle: "Recognize Symmetry" }}
            />
            <Stack.Screen
              name="ThirdActivity"
              component={ThirdActivity}
              options={{ headerShown: true, headerTitle: "Quantity of a set of objects" }}
            />
            <Stack.Screen
              name="FourthActivity"
              component={FourthActivity}
              options={{ headerShown: true, headerTitle: "Days in a week, Months in a year" }}
            />
            <Stack.Screen
              name="FifthActivity"
              component={FifthActivity}
              options={{ headerShown: true, headerTitle: "Sequence of events" }}
            />
            <Stack.Screen
              name="SixthActivity"
              component={SixthActivity}
              options={{ headerShown: true, headerTitle: "Sequence of size or length" }}
            />
            <Stack.Screen
              name="SeventhActivity"
              component={SeventhActivity}
              options={{ headerShown: true, headerTitle: "Quantity of a set of objects" }}
            />
            <Stack.Screen
              name="EighthActivity"
              component={EighthActivity}
              options={{ headerShown: true, headerTitle: "Name the hour and minute hands in a clock" }}
            />
            <Stack.Screen
              name="NinthActivity"
              component={NinthActivity}
              options={{ headerShown: true, headerTitle: "Name the hour and minute hands in a clock" }}
            />
            <Stack.Screen
              name="TenthActivity"
              component={TenthActivity}
              options={{ headerShown: true, headerTitle: "Identify the numbers" }}
            />
            <Stack.Screen
              name="EleventhActivity"
              component={EleventhActivity}
              options={{ headerShown: true, headerTitle: "Identify the numbers" }}
            />
            <Stack.Screen
              name="TwelveActivity"
              component={TwelveActivity}
              options={{ headerShown: true, headerTitle: "Recognize the word" }}
            />
            <Stack.Screen
              name="ThirteenthActivity"
              component={ThirteenthActivity}
              options={{ headerShown: true, headerTitle: "Add quantites up to 10" }}
            />
            <Stack.Screen
              name="FourteenthActivity"
              component={FourteenthActivity}
              options={{ headerShown: true, headerTitle: "Subtract quantites up to 10" }}
            />
            <Stack.Screen
              name="FifteenthActivity"
              component={FifteenthActivity}
              options={{ headerShown: true, headerTitle: "Addition and Subtraction number sentence" }}
            />
            <Stack.Screen
              name="Activity1"
              component={Activity1}
              options={{ headerShown: true, headerTitle: "Sort and classify objects", headerBackVisible: false, }}
            />

            <Stack.Screen
              name="Activity2"
              component={Activity2}
              options={{ headerShown: true, headerTitle: "Recognize Symmetry", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity8"
              component={Activity8}
              options={{ headerShown: true, headerTitle: "Name", headerBackVisible: false, }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
