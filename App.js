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
import Activity3 from "./src/screens/quarter/second/activity/Activity3.jsx";
import Activity4 from "./src/screens/quarter/third/activity/Activity4.jsx";
import Activity6 from "./src/screens/quarter/third/activity/Activity6.jsx";
import Activity7 from "./src/screens/quarter/third/activity/Activity7.jsx";
import Activity8 from "./src/screens/quarter/fourth/activity/Activity8.jsx";
import Activity9 from "./src/screens/quarter/fourth/activity/Activity9.jsx";
import Activity10 from "./src/screens/quarter/fourth/activity/Activity10.jsx";
import Activity11 from "./src/screens/quarter/fourth/activity/Activity11.jsx";
import Activity12 from "./src/screens/quarter/fourth/activity/Activity12.jsx";
import Activity13 from "./src/screens/quarter/fourth/activity/Activity13.jsx";
import Activity14 from "./src/screens/quarter/fourth/activity/Activity14.jsx";
import Activity15 from "./src/screens/quarter/fourth/activity/Activity15.jsx";

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
              options={{ headerShown: true, headerTitle: "Tell time by the hour" }}
            />
            <Stack.Screen
              name="TenthActivity"
              component={TenthActivity}
              options={{ headerShown: true, headerTitle: "Identify the numbers" }}
            />
            <Stack.Screen
              name="EleventhActivity"
              component={EleventhActivity}
              options={{ headerShown: true, headerTitle: "Arrange three numbers" }}
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
              name="Activity3"
              component={Activity3}
              options={{ headerShown: true, headerTitle: "Quantity of a set of objects", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity4"
              component={Activity4}
              options={{ headerShown: true, headerTitle: "Days in a week, Months in a year", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity6"
              component={Activity6}
              options={{ headerShown: true, headerTitle: "Sequence of size or length", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity7"
              component={Activity7}
              options={{ headerShown: true, headerTitle: "Quantity of a set of objects", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity8"
              component={Activity8}
              options={{ headerShown: true, headerTitle: "Name the hour and minute hands in a clock", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity9"
              component={Activity9}
              options={{ headerShown: true, headerTitle: "Tell time by the hour", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity10"
              component={Activity10}
              options={{ headerShown: true, headerTitle: "Identify the numbers", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity11"
              component={Activity11}
              options={{ headerShown: true, headerTitle: "Arrange three numbers", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity12"
              component={Activity12}
              options={{ headerShown: true, headerTitle: "Recognize the word", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity13"
              component={Activity13}
              options={{ headerShown: true, headerTitle: "Add quantites up to 10", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity14"
              component={Activity14}
              options={{ headerShown: true, headerTitle: "Subtract quantites up to 10", headerBackVisible: false, }}
            />
            <Stack.Screen
              name="Activity15"
              component={Activity15}
              options={{ headerShown: true, headerTitle: "Addition and Subtraction number sentence", headerBackVisible: false, }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
